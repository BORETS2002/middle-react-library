import { useState } from "react";
import { React } from "react";
import ReactApexChart from "react-apexcharts";
import "./aperxchartOne.css";
export const ApexChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Financial strength",
          "Profitability",
          "Effectiveness  ",
          "Growth",
          "Forecast",
          "Valuation",
          "Dividend",
          "Economic moat  ",
        ],
      },
      colors: [
        "#33b2df",
        "#546E7A",
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
      ],
    },
  });

  return (
    <>
      <div id='chart'>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='bar'
          // height={300}
        />
      </div>
    </>
  );
};
