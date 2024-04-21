import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

interface SurveyData {
  DATE: Date;
  VALUE: number;
  TYPE: string;
}

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const SurveyScoreChart: React.FC = ({ meanOrMedian }: any) => {
  const [chartData, setChartData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${FHIR_URL}/Observations?type=survey`);
      let { observations: data }: { observations: SurveyData[] } =
        response.data;

      data
        .filter((data) => data.TYPE === "numeric" && data.DATE)
        .forEach((d) => {
          d.DATE = new Date(d.DATE);
          d.VALUE = +d.VALUE;
        });

      data = data.filter(
        (d) => d.DATE instanceof Date && !isNaN(d.DATE.getTime()),
      );

      data.sort((a, b) => a.DATE.getTime() - b.DATE.getTime());

      const groupedData = d3.group(data, (d) => d3.timeFormat("%Y")(d.DATE));

      const averageData = Array.from(groupedData, ([key, values]) => ({
        YEAR: key,
        //@ts-ignore
        value: d3[meanOrMedian](values, (d: any) => d.VALUE) as number,
      }));

      const filteredData = averageData
        .filter((d) => !isNaN(Number(d.YEAR)) && !isNaN(d.value))
        .map((data: any) => {
          return {
            date: new Date(data.YEAR),
            value: data.value <= 10 ? data.value : 9.5,
          };
        });

      setChartData(filteredData);
    };

    fetchData();
  }, [meanOrMedian]);

  return <div>{chartData.length > 0 && <LineChart data={chartData} />}</div>;
};

export default SurveyScoreChart;

interface DataPoint {
  date: Date;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !data) return;

    const svg = d3.select(svgRef.current);

    const margin = { top: 20, right: 10, bottom: 10, left: 80 };
    const width = svg.attr("width")
      ? +svg.attr("width") - margin.left - margin.right
      : 810;
    const height = svg.attr("height")
      ? +svg.attr("height") - margin.top - margin.bottom
      : 425;

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) as number])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g: any) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0),
      );

    const yAxis = (g: any) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call((g: any) =>
          g
            .select(".tick:last-of-type text")
            .clone()
            .attr("x", 3)
            .attr("text-anchor", "start")
            .attr("font-weight", "bold"),
        );

    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.date))
      .y((d) => y(d.value));

    svg.selectAll("*").remove();

    svg.append("g").call(xAxis);

    svg.append("g").call(yAxis);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#6577F3")
      .attr("stroke-width", 2)
      .attr("d", line);

    const tooltip = svg
      .append("g")
      .attr("class", "tooltip")
      .style("display", "none");

    tooltip
      .append("rect")
      .attr("width", 100)
      .attr("height", 20)
      .attr("fill", "white")
      .style("opacity", 0.7);

    tooltip
      .append("text")
      .attr("x", 5)
      .attr("dy", "1.2em")
      .style("font-size", "12px")
      .style("font-weight", "bold");

    tooltipRef.current = tooltip.node() as SVGGElement;

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.value))
      .attr("r", 3)
      .style("fill", "#6577F3")
      .style("cursor", "pointer")
      .on("mouseover", function (event, d) {
        const [x, y] = d3.pointer(event);
        d3.select(tooltipRef.current)
          .attr("transform", `translate(${x},${y - 20})`)
          .style("display", "block");
        d3.select(tooltipRef.current).select("text").text(d.value);
      })
      .on("mouseout", function () {
        d3.select(tooltipRef.current).style("display", "none");
      });
  }, [data]);

  return <svg ref={svgRef} width="810" height="425"></svg>;
};
