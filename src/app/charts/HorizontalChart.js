import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    UpdateModeEnum,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Statistic } from "antd";
// import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const HorizontalChart = ({ data1 }) => {
    const options = {
        indexAxis: "y",
        scales: {
            y: {
                display: true,
                grid: {
                    display: false, // Remove y-axis grid lines
                },
                ticks: {
                    display: true,
                    stepSize: 100,
                    color: "white",
                }
            },
            x: {
                grid: {
                    display: false, // Remove y-axis grid lines
                },
                display: true, // Hide x-axis labels
                ticks: {
                    display: true,
                    color: "white",
                }
            },

        },
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        // responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "right",
            },
            title: {
                display: false,
                text: "Chart.js Horizontal Bar Chart",
            },
        },
    };

    const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: data1,
                borderColor: "white",
                backgroundColor: "white",
            },
        ],
    };
    return (
        <div className='h-[92px]'>
            <Bar options={options} data={data} />
        </div>
    );
};

export default HorizontalChart;
