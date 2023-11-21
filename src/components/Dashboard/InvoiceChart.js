import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import InvoiceModal from "./InvoiceModal";

function InvoiceChart({ width, height, data }) {
  const ref = useRef();

  const [open, setOpen] = useState(false);

  // Function to open the modal
  const handleModalOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleModalClose = () => {
    setOpen(false);
  };

  // const data = [
  //     { label: 'Older', value: 10 },
  //     { label: 'Jan 01-08', value: 20 },
  //     { label: 'Jan 09-16', value: 15 },
  //     { label: 'Jan 17-24', value: 25 },
  //     { label: 'Jan 25-31', value: 30 },
  //     { label: 'Future', value: 18 },
  //   ];

  useEffect(() => {
    // Clear existing chart elements
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("margin", "20")
      .style("border-radius", "10")
      .style("overflow", "visible");
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const paddingLeftFirstBar = 0;

  const draw = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => d.label))
      .range([0, width])
      .padding(0.8);

    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, height]);

    selection
      .transition()
      .duration(300)
      .attr("height", (d) => yScale(d.value))
      .attr("y", (d) => height - yScale(d.value));

    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) =>
        i === 0 ? xScale(d.label) + paddingLeftFirstBar : xScale(d.label)
      )
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", 0)
      .attr("fill", "#47b747")
      .attr("rx", 5)
      .attr("ry", 5)
      .transition()
      .duration(300)
      .attr("height", (d) => yScale(d.value))
      .attr("y", (d) => height - yScale(d.value));

    // Add text labels below each bar
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.label)
      .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
      .attr("y", height + 15)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "start")
      .attr("fill", "black");

    selection
      .exit()
      .transition()
      .duration(300)
      .attr("y", (d) => height)
      .attr("height", 0)
      .remove();
  };

  return (
    <>
      <div className="chart">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #f6f6f7",
            padding: "15px",
          }}
        >
          <h3>Invoices owed to you</h3>
          <Button
            variant="outlined"
            onClick={handleModalOpen}
            sx={{
              color: "#68bb7f",
              backgroundColor: "#e8eefd",
              border: "none",
            }}
          >
            New Sales Invoice
          </Button>
        </Box>
        <InvoiceModal open={open} handleModalClose={handleModalClose} />
        <svg ref={ref}></svg>
      </div>
    </>
  );
}

export default InvoiceChart;
