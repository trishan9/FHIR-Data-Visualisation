// import React, { useEffect, useRef, useState } from "react";
// import * as d3 from "d3";

// interface Observation {
//   effectiveDateTime: string;
//   valueQuantity: {
//     value: number;
//     unit: string;
//   };
//   code: {
//     coding: {
//       system: string;
//       display: string;
//     }[];
//   };
// }

// const BiomarkerChart: React.FC = () => {
//   const [observations, setObservations] = useState<Observation[]>([]);
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://hapi.fhir.org/baseR4/Observation?_count=5000&category=laboratory",
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setObservations(
//           data.entry.map((entry: any) => entry.resource) as Observation[],
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!svgRef.current || observations.length === 0) return;

//     const svg1 = d3.select(svgRef.current);
//     svg1.selectAll("*").remove(); // Clear previous plot

//     const parseDate = (dateString: string) => {
//       const formats = [
//         "%Y-%m-%dT%H:%M:%S", // Expected format
//         "%Y-%m-%dT%H:%M:%S%Z", // With timezone
//         "%Y-%m-%dT%H:%M:%S.%L%Z", // With milliseconds and timezone
//         "%Y-%m-%dT%H:%M:%S.%L", // With milliseconds
//         "%Y-%m-%dT%H:%M:%S.%LZ", // With milliseconds and Z indicating UTC
//         "%Y-%m-%dT%H:%M:%SZ", // With Z indicating UTC
//       ];

//       let parsedDate = null;
//       for (const format of formats) {
//         parsedDate = d3.timeParse(format)(dateString);
//         if (parsedDate) {
//           break;
//         }
//       }

//       return parsedDate;
//     };

//     const parsedData = observations
//       .map((d: Observation) => ({
//         date: parseDate(d.effectiveDateTime),
//         value: d?.valueQuantity?.value ?? 0,
//         unit: d?.valueQuantity?.unit,
//         biomarker: d?.code?.coding?.[0]?.display,
//       }))
//       .filter((d) => d.date !== null); // Filter out observations with null dates

//     const margin = { top: 20, right: 30, bottom: 30, left: 50 };
//     const width = 800 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     const x = d3.scaleTime().range([0, width]);
//     const y = d3.scaleLinear().range([height, 0]);

//     const xAxis = d3.axisBottom(x);
//     const yAxis = d3.axisLeft(y);

//     const valueline = d3
//       .line<any>()
//       .x((d) => x(d.date))
//       .y((d) => y(d.value));

//     const svg = d3
//       .select(svgRef.current)
//       .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     x.domain(d3.extent(parsedData, (d) => d.date) as [Date, Date]);
//     y.domain([0, d3.max(parsedData, (d) => d.value) as number]);

//     svg
//       .append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//     svg.append("g").call(yAxis);

//     svg
//       .append("path")
//       .datum(parsedData)
//       .attr("class", "line")
//       .attr("d", valueline)
//       .style("stroke", "steelblue");

//     // Add labels
//     svg
//       .append("text")
//       .attr(
//         "transform",
//         "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")",
//       )
//       .style("text-anchor", "middle")
//       .text("Date");

//     svg
//       .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 0 - margin.left)
//       .attr("x", 0 - height / 2)
//       .attr("dy", "1em")
//       .style("text-anchor", "middle")
//       .text("Value");
//   }, [observations]);

//   return (
//     <div>
//       <h2>Biomarker Chart</h2>
//       <svg ref={svgRef} width={800} height={400}></svg>
//     </div>
//   );
// };

// export default BiomarkerChart;
