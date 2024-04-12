import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ DoughnutData }) => {
    const options = {
        cutout: 75,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },

        },
    };


    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: DoughnutData,
                backgroundColor: [
                    '#7D0D98',
                    '#3568CC',
                    '#EB5656',
                ],

                borderWidth: 0,
            },
        ],
    };
    return <div className='w-[66%] 3xl:w-3/12 xl:w-4/12 rotate-[18deg]'>
        <Doughnut data={data} options={options} width={'100%'} height={"27%"} />
    </div>;
};

export default DoughnutChart;
