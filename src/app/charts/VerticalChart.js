import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalChart = ({ data1 }) => {


  const options = {
    scales: {
      y: {
        display: true,
        min: 100,

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
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',

      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: data1,
        backgroundColor: 'white',
      },
    ],
  };
  return (
    <div className='h-[92px] w-[167px]'>
      <Bar options={options} data={data} />

    </div>
  );
};

export default VerticalChart;
