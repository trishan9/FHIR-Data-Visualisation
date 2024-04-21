import * as d3 from "d3";
import { useState } from "react";

const RaceBarChart = ({ data }: { data: [string, number][] }) => {
  const totalData = data.reduce((a, b) => a + b[1], 0);
  const filteredData: [string, number][] = data.map((d) => [
    d[0],
    +((d[1] / totalData) * 100).toFixed(2),
  ]);
  data = filteredData;
  const maxValue = Math.max(...data.map(([_, value]) => value));

  const totalCount = data.reduce((total, [, value]) => total + value, 0);

  const width = 580;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yScale = d3
    .scaleBand()
    .domain(data.map(([label]) => label))
    .range([0, innerHeight])
    .padding(0.4);

  const xScale = d3.scaleLinear().domain([0, maxValue]).range([0, innerWidth]);

  const colorScale = d3
    .scaleSequential(d3.interpolateBlues)
    .domain([0, maxValue]);

  const [tooltip, setTooltip] = useState<{
    label: string;
    value: number;
  } | null>(null);

  const handleMouseOver = (event: any, label: string, value: number) => {
    setTooltip({ label, value });
  };

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
                x={0}
                y={yScale(label)!}
                width={xScale(value)}
                height={yScale.bandwidth()}
                fill={colorScale(value)}
                onMouseOver={(event) => handleMouseOver(event, label, value)}
                onMouseLeave={handleMouseLeave}
              />
              {value === maxValue ? (
                <text
                  x={xScale(value) / 2}
                  y={yScale(label)! - 10}
                  dy="0.32em"
                  fontSize={12}
                  fontWeight={500}
                  textAnchor="middle"
                >
                  {tooltip && tooltip.label === label
                    ? `${((value / totalCount) * 100).toFixed(2)}%`
                    : ""}
                </text>
              ) : (
                <text
                  x={xScale(value) + 5}
                  y={yScale(label)! + yScale.bandwidth() / 2}
                  dy="0.32em"
                  fontSize={12}
                  fontWeight={500}
                  textAnchor="start"
                >
                  {tooltip && tooltip.label === label
                    ? `${((value / totalCount) * 100).toFixed(2)}%`
                    : ""}
                </text>
              )}
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

export default RaceBarChart;
