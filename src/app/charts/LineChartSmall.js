"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineChartSmall = ({ data1, tension, borderColor, bgColor }) => {




    const options = {

        scales: {
            y: {
                display: false,
                grid: {
                    display: false, // Remove y-axis grid lines
                },
                ticks: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false, // Remove y-axis grid lines
                },
                display: false, // Hide x-axis labels
                ticks: {
                    display: false
                }
            },

        },
        responsive: true,
        plugins: {

            legend: {
                display: false,
                position: 'bottom',
            },

        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Online',
                data: data1,
                borderColor,
                borderWidth: 1,
                tension,
                pointRadius: 0,
                fill: true, // Enable fill below the line
                backgroundColor: (context) => {

                    if (!context.chart.chartArea) {
                        return;
                    }

                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gredientBg = ctx.createLinearGradient(0, top, 0, bottom);
                    gredientBg.addColorStop(0, bgColor[0]);
                    gredientBg.addColorStop(1, bgColor[1]);
                    return gredientBg;

                }// Fill color
            },
        ],
    };


    return (

        <div className='h-[92px] w-[184px] 3xl:w-[70%]'>
            <Line options={options} data={data} />
        </div>

    );
};

export default LineChartSmall;
