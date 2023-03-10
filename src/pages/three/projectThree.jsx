import React from "react";
import "./projectThree-style.css";
import ApexCharts from "apexcharts";
import { ApexChartOne } from "../../components/aperxchartOne/aperxchatOne";
import { ApexChartTwoo } from "../../components/aperxchartTwoo/aperxchatTwoo";
import { ApexChartThree } from "../../components/aperxchartThree/aperxchatThree";
export default function ProjetctThree() {
  return (
    <>
      <div className='finranks porjects pb-0'>
        <div className='option-big-tex-wrapper d-flex justify-content-between'>
          <h2 className='big-text'> Analyst rating</h2>
          <div className='icons'>
            <svg
              width='17'
              height='17'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.99935 17.3334C4.39685 17.3334 0.666016 13.6026 0.666016 9.00008C0.666016 4.39758 4.39685 0.666748 8.99935 0.666748C13.6018 0.666748 17.3327 4.39758 17.3327 9.00008C17.3327 13.6026 13.6018 17.3334 8.99935 17.3334ZM8.99935 15.6667C10.7675 15.6667 12.4632 14.9644 13.7134 13.7141C14.9636 12.4639 15.666 10.7682 15.666 9.00008C15.666 7.23197 14.9636 5.53628 13.7134 4.28604C12.4632 3.03579 10.7675 2.33341 8.99935 2.33341C7.23124 2.33341 5.53555 3.03579 4.2853 4.28604C3.03506 5.53628 2.33268 7.23197 2.33268 9.00008C2.33268 10.7682 3.03506 12.4639 4.2853 13.7141C5.53555 14.9644 7.23124 15.6667 8.99935 15.6667ZM8.16602 4.83341H9.83268V6.50008H8.16602V4.83341ZM8.16602 8.16675H9.83268V13.1667H8.16602V8.16675Z'
                fill='#746FF2'
              />
            </svg>
          </div>
        </div>

        <div className='aperx'>
          <ApexChartThree />
        </div>
      </div>
    </>
  );
}
