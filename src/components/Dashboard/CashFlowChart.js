import * as d3 from "d3";
import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import "../index.css";

function CashFlowChart({ data }) {
  const ref = useRef();

  const width = 500;
  const height = 300;

  const paddingLeftFirstBar = 0;

  useEffect(() => {
    // Clear existing chart elements
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin", "20")
      .style("overflow", "visible");
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    // Clear existing chart elements
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3.select(ref.current);

    // Set up scales with padding
    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => d.month))
      .range([0, width])
      .padding(0.8);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Create bars
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "#47b747")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("x", (d, i) =>
        i === 0 ? xScale(d.month) + paddingLeftFirstBar : xScale(d.month)
      )
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value));

    // Add text labels below each bar
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.month) // Use the month as the label
      .attr("x", (d) => xScale(d.month) + xScale.bandwidth() / 2)
      .attr("y", height + 15) // Adjust the y-coordinate to position the text below the bars
      .attr("text-anchor", "middle") // Center the text relative to the x-coordinate
      .attr("alignment-baseline", "middle") // Center the text relative to the y-coordinate
      .attr("fill", "black"); // Set the text color
  };

  return (
    <>
      <div className="chart">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #f6f6f7",
            padding: "15px",
          }}
        >
          <h3>Total cash flow</h3>
          <div>
            <Checkbox
              defaultChecked
              sx={{
                padding: "0",
                color: "",
                "&.Mui-checked": {
                  color: "green",
                },
                "& .MuiSvgIcon-root": { fontSize: 20 },
              }}
            />
            <span>In</span>
            <Checkbox
              defaultChecked
              sx={{
                color: "",
                padding: "0",
                "&.Mui-checked": {
                  color: "green",
                },
                "& .MuiSvgIcon-root": { fontSize: 20 },
              }}
            />
            <span>Out</span>
          </div>
        </Box>

        <svg ref={ref}></svg>
      </div>
    </>
  );
}

export default CashFlowChart;
