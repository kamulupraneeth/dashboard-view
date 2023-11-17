import * as d3 from 'd3';
import React, { useRef, useEffect,useState } from 'react';
import { Button, Box } from '@mui/material';

function BarChart(){
    const ref = useRef();

    const datas = [
        { label: 'Older', value: 10 },
        { label: 'Jan 01-08', value: 20 },
        { label: 'Jan 09-16', value: 15 },
        { label: 'Jan 17-24', value: 25 },
        { label: 'Jan 25-31', value: 30 },
        { label: 'Future', value: 18 },
      ];

    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }
    const width  = 500;
    const height = 300;

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style('margin-top','50')
            .style('margin','20')
            .style("border", "1px solid black")
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        
        const svg = d3.select(ref.current);
        var selection = svg.selectAll("rect").data(data);
        var yScale = d3.scaleLinear()
                            .domain([0, d3.max(data)])
                            .range([0, height-100]);
        
        selection
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
                .attr("height", (d) => yScale(d))
                .attr("y", (d) => height - yScale(d))
        
        selection
            .exit()
            .transition().duration(300)
                .attr("y", (d) => height)
                .attr("height", 0)
            .remove()
    }


    return (
        <>
        <div className="chart">
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                borderBottom:'1px solid #f6f6f7',
                padding:'20'
            }}>
                <h1>Invoices owed to you</h1>
                <Button
                    variant='outlined'
                    sx={{ color: '#68bb7f',backgroundColor:'#e8eefd',border:'none' }}
                >
                    New Sales Invoice
                </Button>
            </Box>
            <svg ref={ref}>
            </svg>
        </div>
        </>
    )

}

export default BarChart;