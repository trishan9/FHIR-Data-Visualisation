import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

interface Encounter {
  id: string;
  class: {
    code: string;
  };
}

const FHIR_URL = process.env.NEXT_PUBLIC_FHIR_URL;

const EncounterPieChart: React.FC = () => {
  const [encounters, setEncounters] = useState<Encounter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${FHIR_URL}/Encounter?_count=100`);
        const data = response.data.entry.map((entry: any) => ({
          id: entry.resource.id,
          class:
            entry?.resource?.class?.display ||
            entry?.resource?.class?.code ||
            "-",
        }));
        console.log(data);
        setEncounters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (encounters.length > 0) {
      createPieChart();
    }
  }, [encounters]);

  const createPieChart = () => {
    d3.select("#encounterPieChartContainer svg").remove();

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeTableau10);

    const categories = {
      Inpatient: ["IMP", "inpatient", "inpatient encounter", "-"],
      Outpatient: ["AMB", "ambulatory", "Ambulatorio"],
      Emergency: ["EMER", "ACUTE"],
      Virtual: ["VR"],
    };

    // Group encounters by category
    const groupedEncounters = Object.keys(categories).reduce(
      (acc: any, category) => {
        acc[category] = encounters.filter((encounter) =>
          //@ts-ignore
          categories[category].includes(encounter.class),
        ).length;
        return acc;
      },
      {},
    );

    const totalEncounters = Object.values(groupedEncounters).reduce(
      //@ts-ignore
      (sum: number, value: number) => sum + value,
      0,
    );

    const data = Object.entries(groupedEncounters).map(([category, count]) => ({
      category: category,
      //@ts-ignore
      count: (count / totalEncounters) * 100,
    }));

    const svg = d3
      .select("#encounterPieChartContainer")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const pie = d3
      .pie<any>()
      .value((d) => d.count)
      .sort(null);

    const arcs = svg.selectAll("arc").data(pie(data)).enter().append("g");

    arcs
      .append("path")
      //@ts-ignore
      .attr("d", arc)
      //@ts-ignore
      .attr("fill", (d, i) => color(i))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).attr("opacity", 1);
        d3.select(event.currentTarget).attr("cursor", "pointer");

        // Show percentage text
        svg
          .append("text")
          .attr("transform", function () {
            //@ts-ignore
            const pos = arc.centroid(d);
            return `translate(${pos})`;
          })
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .text(function () {
            return d.data.count.toFixed(0) + "%";
          });
      })
      .on("mouseout", (event) => {
        d3.select(event.currentTarget).attr("opacity", 0.8);

        // Remove percentage text on mouseout
        svg.selectAll("text").remove();
      });
  };

  return <div id="encounterPieChartContainer" />;
};

export default EncounterPieChart;
