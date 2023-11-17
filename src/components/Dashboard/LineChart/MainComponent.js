// MainComponent.js
import React from 'react';
import LineChart from './LineChart';

const MainComponent = ({width,height}) => {

  return (
    <div>
      <LineChart width={width} height={height}/>
    </div>
  );
};

export default MainComponent;
