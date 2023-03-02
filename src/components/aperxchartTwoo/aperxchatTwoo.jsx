import { useState } from "react";
import { React } from "react";
import ReactApexChart from "react-apexcharts";
import "./aperxchartTwoo.css";
export const ApexChartTwoo = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Series 1",
        // data: [10, , 0, 0, 0, 0],
        data: [9, 8, 8, 0, 0, 0],
      },
      {
        name: "Series 2",
        data: [0, 0, 8, 7, 0, 0],
      },
      {
        name: "Series 3",
        data: [0, 0, 0, 7, 7, 0],
      },

      {
        name: "Series 4",
        data: [0, 0, 0, 0, 7, 9],
      },
      {
        name: "Series 5",
        data: [9, 0, 0, 0, 0, 9],
      },
    ],
    options: {
      chart: {
        height: 150,
        type: "radar",
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: "Radar Chart - Multi Series",
      },
      stroke: {
        width: 2,
      },
      fill: {
        opacity: 0.1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: [
          "Financial strength",
          "Profitability",
          "Effectiveness",
          "Growth",
          "Forecast",
          "Valuation",
          "Dividend",
          "Economic moat",
        ],
      },
    },
  });

  return (
    <>
      <div id='chart'>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='radar'
          height={330}
        />
      </div>
    </>
  );
};
