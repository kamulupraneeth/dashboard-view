import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { Box } from "@mui/material";
import Dropdown from "../Dropdown";

function LineChart({ width, height, data, handleRandomizeLineData }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Clear existing chart elements
    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin-top", "0")
      .style("margin", "20")
      .style("border-radius", "10")
      .style("overflow", "visible");

    // setting the scaling

    const xScale = d3
      .scaleLinear()
      .domain([0, data?.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const generatedScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data?.length)
      .tickFormat((i) => i + 9);

    const yAxis = d3.axisLeft(yScale).ticks("");
    svg.append("g").call(xAxis).attr("transform", `translate(0,${height})`);
    svg.append("g").call(yAxis).attr("opacity", 0);

    // setting up the data for svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generatedScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "#62be6b");
  }, [data, height, width]);

  return (
    <>
      <div>
        <Box
          sx={{
            borderBottom: "1px solid #f6f6f7",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>Checking account</h3>
          <Dropdown handleRandomizeLineData={handleRandomizeLineData} />
        </Box>
        <svg ref={chartRef}></svg>
      </div>
    </>
  );
}

export default LineChart;
