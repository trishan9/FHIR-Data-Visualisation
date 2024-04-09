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
        const response = await axios.get(`${FHIR_URL}/Condition?_count=10000`);
        const conditionEntries = response.data.entry;
        setData(conditionEntries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const conditionsCount: { [key: string]: number } = {};
      data.forEach((item) => {
        const condition = item?.resource?.code?.coding?.[0]?.display;
        conditionsCount[condition] = (conditionsCount[condition] || 0) + 1;
      });

      // Convert conditionsCount to array of objects
      const conditionsArray = Object.keys(conditionsCount).map((key) => ({
        condition: key,
        count: conditionsCount[key],
      }));

      // Sort conditionsArray by count in descending order
      conditionsArray.sort((a, b) => b.count - a.count);

      const top10Conditions = conditionsArray
        .filter((data) => data.condition !== "undefined")
        .slice(0, 10);
      console.log(top10Conditions);

      const width = 1500;
      const height = 600;

      const treemap = d3.treemap().size([width, height]).padding(1).round(true);

      const root = d3
        .hierarchy({ children: top10Conditions })
        //@ts-ignore
        .sum((d) => d.count);
      //@ts-ignore
      treemap(root);

      const color = d3.scaleOrdinal(d3.schemeTableau10);

      const svg = d3.select(svgRef.current);

      svg.selectAll("*").remove();

      const cell = svg
        .selectAll("g")
        .data(root.leaves())
        .enter()
        .append("g")
        //@ts-ignore
        .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

      cell
        .append("rect")
        //@ts-ignore
        .attr("width", (d) => d.x1 - d.x0)
        //@ts-ignore
        .attr("height", (d) => d.y1 - d.y0)
        //@ts-ignore
        .attr("fill", (d, i) => color(i))
        .on("mouseover", (event, d) => {
          d3.select(event.currentTarget)
            .attr("opacity", 0.7)
            .attr("cursor", "pointer");
          svg
            .append("text")
            //@ts-ignore
            .attr("x", (d.x1 - d.x0) / 2 + d.x0)
            //@ts-ignore
            .attr("y", (d.y1 - d.y0) / 2 + d.y0)
            .attr("text-anchor", "middle")
            .attr("dominant-baseline", "middle")
            .attr("font-size", "12px")
            .attr("fill", "#000")
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
          d3.select(event.currentTarget).attr("opacity", 1);
          svg.select("#tooltip").remove();
        });
    }
  }, [data]);

  return (
    <div>
      <svg ref={svgRef} width={1500} height={600}></svg>
    </div>
  );
};

export default TreeMap;
