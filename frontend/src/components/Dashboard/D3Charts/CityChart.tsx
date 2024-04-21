import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";
import { cn } from "@/lib/utils";

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const CityChart = () => {
  const [cityData, setCityData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCityData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${FHIR_URL}/Patient`);
        const patientEntries = response.data.patients;

        const cityCounts: { [key: string]: number } = {};
        patientEntries.forEach((entry: any) => {
          //@ts-ignore
          const cityName = entry.CITY;
          cityCounts[cityName] = (cityCounts[cityName] || 0) + 1;
        });

        const cities = Object.entries(cityCounts).map(([name, count]) => ({
          name: name,
          count,
        }));

        cities.sort((a, b) => b.count - a.count);
        setCityData(cities.filter((city: any) => city.name != "Unknown"));
      } catch (error) {
        console.error("Error fetching city data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getCityData();
  }, []);

  return (
    <div className="flex items-center gap-16">
      {isLoading ? (
        <div className="ml-8">Loading...</div>
      ) : (
        <BarChart data={cityData} label="Cities" />
      )}
    </div>
  );
};

export default CityChart;

const BarChart = ({ data, label }: any) => {
  const totalCities = data.reduce(
    (a: any, b: any) => ({ count: a.count + b.count }),
    { count: 0 },
  );

  const topCities = data.slice(0, 15).map((data: any) => ({
    name: data.name,
    count: ((data.count / totalCities.count) * 100).toFixed(2),
  }));

  const width = 1000;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const maxValue = Math.max(...topCities.map((d: any) => d.count));

  const xScale = d3
    .scaleBand()
    .domain(topCities.map((d: any) => d.name))
    .range([0, innerWidth])
    .padding(0.2);

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

  const colorScale = d3
    .scaleSequential(d3.interpolateGreens)
    .domain([0, maxValue]);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {topCities.map((d: any, index: any) => (
            <g key={index}>
              <rect
                x={xScale(d.name)}
                y={yScale(d.count)}
                width={xScale.bandwidth()}
                height={innerHeight - yScale(d.count)}
                fill={colorScale(d.count)}
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
