import React, { useState } from "react";
import Chart from "react-apexcharts";
import './Piecharts.css'
const Piecharts = () => {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: "pie-chart",
      },
       labels: ["Category A", "Category B", "Category C", "Category D", "Category E"],
    },
    series: [44, 55, 13, 43, 22], // Initial data for the pie chart
  });

  const updateSeries = () => {
    const newSeries = chartState.series.map(() =>
      Math.floor(Math.random() * (180 - 10 + 1)) + 10 // Random data between 10 and 180
    );

    setChartState((prevState) => ({
      ...prevState,
      series: newSeries, // Update series with new random data
    }));
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartState.options}
            series={chartState.series}
            type="pie"
            width="450"
            
          />
        </div>
      </div>
    
    </div>
  );
};

export default Piecharts;
