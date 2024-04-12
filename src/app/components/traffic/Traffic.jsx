import DoughnutChart from '@/app/charts/DoughnutChart';
import { DoughnutData } from '@/app/utils/DummyData';
import React from 'react';

const Traffic = () => {
    return (
        <div className='bg-white rounded-2xl p-6 w-[24.3%] 3xl:w-full'>
            <h2 className='capitalize font-bitter text-black text-lg font-bold'>traffic</h2>
            <div className="flex w-full justify-center items-center"><DoughnutChart DoughnutData={DoughnutData} />
            </div>

            <div className="flex justify-between items-center mt-6">
                <div>
                    <h3 className='text-[#111111] font-bitter font-bold text-lg'>{DoughnutData[1]}%</h3>

                    <p className='capitalize ps-3 font-bitter text-black text-sm font-medium relative before:content-[""] before:absolute before:left-[6px] before:top-[31%] before:translate-x-[-50%] before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#3568CC]'>from facebook</p>

                </div>
                <div>
                    <h3 className='text-[#111111] font-bitter font-bold text-lg'>{DoughnutData[2]}%</h3>

                    <p className='capitalize ps-3 font-bitter text-black text-sm font-medium relative before:content-[""] before:absolute before:left-[6px] before:top-[31%] before:translate-x-[-50%] before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#EC0A0A]'>from YouTube</p>

                </div>
                <div>
                    <h3 className='text-[#111111] font-bitter font-bold text-lg'>{DoughnutData[0]}%</h3>

                    <p className='capitalize ps-3 font-bitter text-black text-sm font-medium relative before:content-[""] before:absolute before:left-[6px] before:top-[31%] before:translate-x-[-50%] before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#A832C4]'>other</p>

                </div>
            </div>
        </div>
    );
};

export default Traffic;
