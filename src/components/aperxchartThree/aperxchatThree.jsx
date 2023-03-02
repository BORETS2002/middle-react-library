import { useState } from "react";
import { React } from "react";
import ReactApexChart from "react-apexcharts";
import "./aperxchartThree.css";
export const ApexChartThree = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [20, 19, 19, 13],
      },
      {
        name: "PRODUCT B",
        data: [24, 22, 25, 17],
      },
      {
        name: "PRODUCT C",
        data: [18, 22, 13, 23],
      },
      {
        name: "PRODUCT D",
        data: [0, 12, 12, 12],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "09/22/2011 GMT",
          "10/22/2011 GMT",
          "11/22/2011 GMT",
          "12/22/2011 GMT",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <>
      <div id='chart'>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type='bar'
          height={330}
        />
      </div>
    </>
  );
};
