import { useState } from "react";
import * as d3 from "d3";

const BarChart = ({ data }: { data: [string, number][] }) => {
  const totalData = data.reduce((a, b) => a + b[1], 0);
  const filteredData: [string, number][] = data.map((d) => [
    d[0],
    +((d[1] / totalData) * 100).toFixed(2),
  ]);
  data = filteredData;

  // Calculate maximum value for scaling the bars
  const maxValue = Math.max(...data.map(([_, value]) => value));

  // Calculate total count for percentage calculation
  const totalCount = data.reduce((total, [, value]) => total + value, 0);

  // Set dimensions for the chart
  const width = 560;
  const height = 425;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create scaling functions
  const xScale = d3
    .scaleBand()
    .domain(data.map(([label]) => label))
    .range([0, innerWidth])
    .padding(0.5);

  const yScale = d3.scaleLinear().domain([0, maxValue]).range([innerHeight, 0]);

  // State to manage tooltip display
  const [tooltip, setTooltip] = useState<{
    label: string;
    value: number;
  } | null>(null);

  // Function to handle mouse hover over bars
  const handleMouseOver = (event: any, label: string, value: number) => {
    setTooltip({ label, value });
  };

  // Function to handle mouse leave from bars
  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map(([label, value], index) => (
            <g
              key={index}
              className="cursor-pointer opacity-90 hover:opacity-100"
            >
              <rect
                x={xScale(label)!}
                y={yScale(value)}
                width={xScale.bandwidth()}
                height={innerHeight - yScale(value)}
                fill="#f28e2c"
                onMouseOver={(event) => handleMouseOver(event, label, value)}
                onMouseLeave={handleMouseLeave}
              />
              <text
                x={xScale(label)! + xScale.bandwidth() / 2}
                y={yScale(value)}
                dy="-0.5em"
                fontSize={12}
                fontWeight={500}
                textAnchor="middle"
              >
                {tooltip && tooltip.label === label
                  ? `${((value / totalCount) * 100).toFixed(2)}%`
                  : ""}
              </text>
            </g>
          ))}
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

export default BarChart;
