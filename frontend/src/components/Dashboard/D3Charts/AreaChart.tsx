import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface CareData {
  created: string;
  total: {
    value: number;
    currency: string;
  };
}

const AreaChart: React.FC<{ data: CareData[] }> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<SVGGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Parse dates and values
    const parsedData = data.map((d) => ({
      date: new Date(d.created),
      value: d?.total ?? 0,
    }));

    // Aggregate data by month
    const aggregatedData = d3.rollup(
      parsedData,
      //@ts-ignore
      (v) => d3.mean(v, (d) => d.value),
      (d) => d3.timeMonth(d.date),
    );

    const aggregatedDataArray = Array.from(aggregatedData, ([key, value]) => ({
      date: new Date(key),
      value,
    }));

    // Set up dimensions based on container size
    const parentWidth = 1500;
    const parentHeight = 390;
    const margin = { top: 20, right: 120, bottom: 30, left: 40 };
    const width = parentWidth - margin.left - margin.right;
    const height = parentHeight - margin.top - margin.bottom;

    // Remove previous chart if exists
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(aggregatedDataArray, (d) => d.date) as [Date, Date])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(aggregatedDataArray, (d) => d.value) || 0])
      .range([height, 0]);

    // Create area generator
    const area = d3
      .area<{ date: Date; value: number }>()
      .x((d) => xScale(d.date))
      .y0(height)
      .y1((d) => yScale(d.value));

    // Add area to SVG
    svg
      .append("path")
      .datum(aggregatedDataArray)
      .attr("fill", "rgba(26,143,251, 0.3)")
      .attr("stroke", "#1A8FFB")
      .attr("stroke-width", 2)
      //@ts-ignore
      .attr("d", area)
      .on("mouseover", () => {
        tooltipRef.current?.style.setProperty("display", "block");
        tooltipRef.current?.style.setProperty("z-index", "100");
      })
      .on("mousemove", (event) => {
        const x0 = xScale.invert(d3.pointer(event)[0]);
        const bisectDate = d3.bisector((d: any) => d.date).left;
        const i = bisectDate(aggregatedDataArray, x0, 1);
        const d0 = aggregatedDataArray[i - 1];
        const d1 = aggregatedDataArray[i];
        const d: any =
          x0.getTime() - d0.date.getTime() > d1.date.getTime() - x0.getTime()
            ? d1
            : d0;
        tooltipRef.current?.setAttribute(
          "transform",
          `translate(${xScale(d.date)},0)`,
        );
        if (tooltipRef.current) {
          const textElement = tooltipRef.current.querySelector("text");
          if (textElement) {
            const formattedDate = d3.timeFormat("%Y-%m")(d.date);
            textElement.textContent = `$${d.value.toFixed(2)} on ${formattedDate}`;
          }
        }
        dotRef.current?.setAttribute("cx", xScale(d.date).toString());
        dotRef.current?.setAttribute("cy", yScale(d.value).toString());
        dotRef.current?.style.setProperty("display", "block"); // Show dot on mousemove
      })
      .on("mouseout", () => {
        tooltipRef.current?.style.setProperty("display", "none");
        dotRef.current?.style.setProperty("display", "none"); // Hide dot on mouseout
      });

    // Add dots above the stroke of the area
    svg
      .selectAll(".dot-above")
      .data(aggregatedDataArray)
      .enter()
      .append("circle")
      .attr("class", "dot-above")
      .attr("r", 4)
      .attr("fill", "#1A8FFB")
      .style("display", "none"); // Initially hide dots

    // Event listeners to show dots on hover and hide on mouseout
    svg
      .selectAll(".dot-above")
      .on("mouseover", () => {
        dotRef.current?.style.setProperty("display", "block"); // Show dot on mouseover
        tooltipRef.current?.style.setProperty("display", "block");
      })
      .on("mouseout", () => {
        dotRef.current?.style.setProperty("display", "none"); // Hide dot on mouseout
        tooltipRef.current?.style.setProperty("display", "none");
      });

    // Update dot positions on hover
    svg
      .selectAll(".dot-above")
      .attr("cx", (d: any) => xScale(d.date))
      .attr("cy", (d: any) => yScale(d.value));

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
    svg.append("g").call(d3.axisLeft(yScale));

    // Create tooltip
    const tooltip = svg
      .append("g")
      .attr("class", "tooltip")
      .style("display", "none");

    tooltip
      .append("line")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.3)
      .attr("stroke-dasharray", "4");

    tooltip
      .append("text")
      .attr("x", 10)
      .attr("dy", "-0.5em")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .text("");

    //@ts-ignore
    tooltipRef.current = tooltip.node() as SVGGElement;
    //@ts-ignore
    dotRef.current = svg.select(".dot-above").node() as SVGCircleElement;
  }, [data]);

  return (
    <div style={{ overflowX: "auto", width: "100%", paddingRight: "20px" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default AreaChart;
