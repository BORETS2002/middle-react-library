import { useState } from "react";
import { React } from "react";
import ReactApexChart from "react-apexcharts";
import "./aperxchartFor.css";
import ReactSpeedometer from "react-d3-speedometer";
export const ApexChartFor = () => {
  return (
    <>
      <div className='big-bos'>
        <span className='spans-box'>
          <span className='mini-text'>Fire value</span>
          <span className='mini-sum'>$142.45</span>
          <span className='mini-strelka'>
            <svg
              width='16'
              height='14'
              viewBox='0 0 16 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.13397 0.5C7.51887 -0.166666 8.48112 -0.166667 8.86602 0.5L15.7942 12.5C16.1791 13.1667 15.698 14 14.9282 14L1.0718 14C0.301996 14 -0.179129 13.1667 0.205771 12.5L7.13397 0.5Z'
                fill='#746FF2'
              />
            </svg>
          </span>
        </span>
        <ReactSpeedometer
          value={367}
          needleHeightRatio={0.6}
          segmentColors={[
            " #006B3D",
            " #3CDA73",
            "  #FFCA2D ",
            "#FF7A49",
            "#FF2A3A",
          ]}
        />
        <span className='starts'>Undervalued</span>
        <span className='ends'>Overvalued</span>

        <span className='summa'>$131.19</span>
      </div>
    </>
  );
};
