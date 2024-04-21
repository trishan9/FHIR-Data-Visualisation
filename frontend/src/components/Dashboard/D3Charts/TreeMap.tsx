import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const TreeMap: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${FHIR_URL}/Condition`);
        const conditionEntries = response.data.conditions;
        setData(conditionEntries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length) {
      const conditionsCount: { [key: string]: number } = {};
      data.forEach((item) => {
        const condition = item?.DESCRIPTION;
        conditionsCount[condition] = (conditionsCount[condition] || 0) + 1;
      });

      const conditionsArray = Object.keys(conditionsCount).map((key) => ({
        condition: key.replace(/\s*\([^)]*\)\s*/g, ""),
        count: conditionsCount[key],
      }));

      conditionsArray.sort((a, b) => b.count - a.count);

      const top10Conditions = conditionsArray
        .filter((data) => data.condition !== "undefined")
        .slice(0, 10);

      const width = 1500;
      const height = 600;

      const treemap = d3.treemap().size([width, height]).padding(1).round(true);

      const root = d3
        .hierarchy({ children: top10Conditions })
        .sum((d: any) => d.count);
      //@ts-ignore
      treemap(root);

      const colorScale = d3
        .scaleSequential(d3.interpolateReds)
        .domain([0, 180]);

      const svg = d3.select(svgRef.current);

      svg.selectAll("*").remove();

      const cell = svg
        .selectAll("g")
        .data(root.leaves())
        .enter()
        .append("g")
        .attr("transform", (d: any) => `translate(${d.x0},${d.y0})`);

      cell
        .append("rect")
        .attr("width", (d: any) => d.x1 - d.x0)
        .attr("height", (d: any) => d.y1 - d.y0)
        .attr("fill", (d: any) => colorScale(d.data.count))
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget).attr("cursor", "pointer");
          svg
            .append("text")
            //@ts-ignore
            .attr("x", (d.x1 - d.x0) / 2 + d.x0)
            //@ts-ignore
            .attr("y", (d.y1 - d.y0) / 2 + d.y0)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("font-size", "12px")
            .attr(
              "fill",
              //@ts-ignore
              d.data.count === conditionsArray[0].count ? "#fff" : "#000",
            ) // Change text color conditionally
            .attr("id", "tooltip")
            .append("tspan")
            //@ts-ignore
            .text(`${d.data.condition}`);

          svg
            .select("#tooltip")
            .append("tspan")
            //@ts-ignore
            .attr("x", (d.x1 - d.x0) / 2 + d.x0)
            .attr("dy", "1.2em")
            //@ts-ignore
            .text(`${d.data.count}`)
            .attr("font-size", "12px");
        })
        .on("mouseout", (event, d) => {
          svg.select("#tooltip").remove();
        });
    }
  }, [data]);

  return (
    <div style={{ overflowX: "auto" }}>
      <svg ref={svgRef} width={1500} height={600}></svg>
    </div>
  );
};

export default TreeMap;
