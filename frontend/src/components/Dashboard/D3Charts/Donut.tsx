import { useState } from "react";
import * as d3 from "d3";

const Arc = ({
  data,
  index,
  createArc,
  colors,
  handleMouseOver,
  handleMouseLeave,
}: {
  data: any;
  index: any;
  createArc: any;
  colors: any;
  format: any;
  showLabel: boolean;
  handleMouseOver: any;
  handleMouseLeave: any;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      key={index}
      className={`arc cursor-pointer font-semibold ${
        isHovered ? "opacity-100" : "opacity-80"
      } transition hover:font-bold`}
      onMouseOver={(event) => {
        handleMouseOver(event, data);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
    >
      <path className="arc" d={createArc(data)} fill={colors(index)} />
    </g>
  );
};

const Donut = (props: any) => {
  const createPie = d3
    .pie()
    //@ts-ignore
    .value((d) => d.value)
    .sort(null);

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = d3.scaleOrdinal(["#3C50E0", "#FFC0CB", "#0FADCF"]);
  const format = d3.format(".1f");
  const data = createPie(props.data);

  const [tooltip, setTooltip] = useState<any>(null);

  const handleMouseOver = (event: any, data: any) => {
    setTooltip(data);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        <text
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="black"
          dy=".35em"
        >
          <tspan x="0" dy="0">
            {props.label1}
          </tspan>
          <tspan x="0" dy="1.2em">
            {props.label2 ? props.label2 : ""}
          </tspan>
        </text>

        {data.map((d, i) => (
          <Arc
            key={i}
            index={i}
            data={d}
            createArc={createArc}
            colors={colors}
            format={format}
            showLabel={props.showLabel}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
          />
        ))}

        {tooltip && (
          <text
            x={0}
            y={0}
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="black"
            dy={5}
          >
            {tooltip.value.toFixed(2)}%
          </text>
        )}
      </g>
    </svg>
  );
};

export default Donut;
