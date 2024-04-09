import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import { cn } from "@/lib/utils";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const MedicationChart = () => {
  const [medicationData, setMedicationData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMedicationData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${FHIR_URL}/Medication?_count=10000`);
        const medicationEntries = response.data.entry;

        // Process medication data to extract medication names and counts
        const medicationCounts: { [key: string]: number } = {};
        medicationEntries.forEach((entry: any) => {
          const medicationName =
            entry.resource.code?.coding?.[0]?.display || "Unknown";
          medicationCounts[medicationName] =
            (medicationCounts[medicationName] || 0) + 1;
        });

        // Convert medication counts to array of objects
        const medicationUsage = Object.entries(medicationCounts).map(
          ([name, count]) => ({
            name: name.split(" ")[0],
            count,
          }),
        );

        // Sort medications by count in descending order
        medicationUsage.sort((a, b) => b.count - a.count);
        console.log(medicationUsage);
        setMedicationData(
          medicationUsage.filter(
            (medication: any) => medication.name != "Unknown",
          ),
        );
      } catch (error) {
        console.error("Error fetching medication data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getMedicationData();
  }, []);

  return (
    <div className="flex items-center gap-16">
      {isLoading ? (
        <div className="ml-8">Loading...</div>
      ) : (
        <BarChart
          data={medicationData}
          label="Top 10 Commonly Prescribed Medications"
        />
      )}
    </div>
  );
};

export default MedicationChart;

const BarChart = ({ data, label }: any) => {
  const totalMedicines = data.reduce(
    (a: any, b: any) => ({ count: a.count + b.count }),
    { count: 0 },
  );
  console.log(totalMedicines.count);
  const topMedicines = data.slice(0, 10).map((data: any) => ({
    name: data.name,
    count: ((data.count / totalMedicines.count) * 100).toFixed(2),
  }));

  // Set dimensions for the chart
  const width = 900;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Calculate maximum value for scaling the bars
  const maxValue = Math.max(...topMedicines.map((d: any) => d.count));

  // Create scaling functions
  const xScale = d3
    .scaleBand()
    .domain(topMedicines.map((d: any) => d.name))
    .range([0, innerWidth])
    .padding(0.5);

  const yScale = d3.scaleLinear().domain([0, maxValue]).range([innerHeight, 0]);

  // State to manage tooltip display
  const [tooltip, setTooltip] = useState<{
    name: string;
    count: number;
  } | null>(null);

  // Function to handle mouse hover over bars
  const handleMouseOver = (event: any, d: any) => {
    const { name, count } = d;
    setTooltip({ name, count });
  };

  // Function to handle mouse leave from bars
  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {topMedicines.map((d: any, index: any) => (
            <g key={index}>
              <rect
                x={xScale(d.name)}
                y={yScale(d.count)}
                width={xScale.bandwidth()}
                height={innerHeight - yScale(d.count)}
                fill="#0FADCF"
                className="cursor-pointer opacity-80 hover:opacity-100"
                onMouseOver={(event) => handleMouseOver(event, d)}
                onMouseLeave={handleMouseLeave}
              />
            </g>
          ))}
          {tooltip && (
            <text
              //@ts-ignore
              x={xScale(tooltip.name) + xScale.bandwidth() / 2}
              y={yScale(tooltip.count)}
              dy="-0.5em"
              fontSize={12}
              fontWeight={500}
              textAnchor="middle"
              fill="#000"
              className={cn(
                "transition-all ease-in-out",
                !tooltip ? "invisible" : "visible",
              )}
            >
              {tooltip.count}%
            </text>
          )}
          <g transform={`translate(0,${innerHeight})`}>
            <g
              className="axis"
              //@ts-ignore
              ref={(node) => d3.select(node).call(d3.axisBottom(xScale))}
            />
          </g>
          <g
            className="axis"
            //@ts-ignore
            ref={(node) => d3.select(node).call(d3.axisLeft(yScale))}
          />
        </g>
      </svg>
    </div>
  );
};
