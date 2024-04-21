import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import { cn } from "@/lib/utils";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const FILTER_MEDICATIONS_NAMES = {
  "NDA020503 200 ACTUAT Albuterol 0.09 MG/ACTUAT Metered Dose Inhaler":
    "Albuterol",
  "120 ACTUAT Fluticasone propionate 0.044 MG/ACTUAT Metered Dose Inhaler":
    "Fluticasone",
  "24 HR Metformin hydrochloride 500 MG Extended Release Oral Tablet":
    "Metformin",
  "insulin human  isophane 70 UNT/ML / Regular Insulin  Human 30 UNT/ML Injectable Suspension [Humulin]":
    "isophane",
  "1 ML medroxyPROGESTERone acetate 150 MG/ML Injection": "Medroxyprogesterone",
};

const MedicationChart = ({ setPopularMedication }: any) => {
  const [medicationData, setMedicationData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMedicationData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${FHIR_URL}/Medications`);
        const medicationEntries = response.data.medications;

        const medicationCounts: { [key: string]: number } = {};
        medicationEntries.forEach((entry: any) => {
          //@ts-ignore
          const medicationName = FILTER_MEDICATIONS_NAMES[entry.DESCRIPTION]
            ? //@ts-ignore
              FILTER_MEDICATIONS_NAMES[entry.DESCRIPTION]
            : entry.DESCRIPTION.split(" ")[0].charAt(0).toUpperCase() +
                entry.DESCRIPTION.split(" ")[0].slice(1).toLowerCase() ||
              "Unknown";
          medicationCounts[medicationName] =
            (medicationCounts[medicationName] || 0) + 1;
        });

        const medicationUsage = Object.entries(medicationCounts).map(
          ([name, count]) => ({
            name: name,
            count,
          }),
        );

        medicationUsage.sort((a, b) => b.count - a.count);
        setPopularMedication(medicationUsage[0].name);
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
  const topMedicines = data.slice(0, 10).map((data: any) => ({
    name: data.name,
    count: ((data.count / totalMedicines.count) * 100).toFixed(2),
  }));

  const width = 1100;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxValue = Math.max(...topMedicines.map((d: any) => d.count));

  const xScale = d3
    .scaleBand()
    .domain(topMedicines.map((d: any) => d.name))
    .range([0, innerWidth])
    .padding(0.6);

  const yScale = d3.scaleLinear().domain([0, maxValue]).range([innerHeight, 0]);

  const [tooltip, setTooltip] = useState<{
    name: string;
    count: number;
  } | null>(null);

  const handleMouseOver = (event: any, d: any) => {
    const { name, count } = d;
    setTooltip({ name, count });
  };

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
