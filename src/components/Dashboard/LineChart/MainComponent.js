// MainComponent.js
import React from "react";
import LineChart from "./LineChart";

const MainComponent = ({
  width,
  height,
  data,
  handleRandomizeLineData,
  chartLineData,
  setChartData,
}) => {
  return (
    <div>
      <LineChart
        width={width}
        height={height}
        data={data}
        handleRandomizeLineData={handleRandomizeLineData}
        chartLineData={chartLineData}
        setChartData={setChartData}
      />
    </div>
  );
};

export default MainComponent;
