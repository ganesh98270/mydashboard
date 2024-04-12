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
    Legend
);

const LineChart = ({ data1, data2 }) => {


    const options = {
        scales: {
            y: {
                beginAtZero: true,
                min: 100, // Start y-axis from 100

                ticks: {
                    display: true,
                    stepSize: 2000,
                    callback: function (value, index, values) {
                        return new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                        }).format(value); // Add $ prefix to y-axis labels
                    }
                }
            },
            x: {
                display: false // Hide x-axis labels
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
                label: 'Store',
                data: data2,
                borderColor: '#A832C4',
                backgroundColor: '#A832C4',
                tension: 0.4,
                pointRadius: 0,
                fill: true,
                backgroundColor: (context) => {
                    const bgColor = [
                        'rgba(229, 188, 239, 1)',
                        'rgba(217, 217, 217, 0)'
                    ];

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
            {
                label: 'Online',
                data: data1,
                borderColor: '#0B06F6',
                backgroundColor: '#0B06F6',
                tension: 0.4,
                pointRadius: 0,
                fill: true,
                backgroundColor: (context) => {
                    const bgColor = [
                        'rgba(177, 176, 245, 1)',
                        'rgba(217, 217, 217, 0)'
                    ];

                    if (!context.chart.chartArea) {
                        return;
                    }

                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gredientBg = ctx.createLinearGradient(0, top, 0, bottom);
                    gredientBg.addColorStop(0, bgColor[0]);
                    gredientBg.addColorStop(1, bgColor[1]);
                    return gredientBg;

                }
            },
        ],
    };

    return (
        <div className="relative w-[100%]">
            <Line options={options} data={data} width={'100%'} height={"27%"} />
        </div>

    );
};

export default LineChart;
