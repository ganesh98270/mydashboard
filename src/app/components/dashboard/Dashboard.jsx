"use client";
import React from 'react';
import LineChart from '@/app/charts/LineChart';
import { Helper } from '@/app/utils/Helper';
import Image from 'next/image';
import Estimate from '../../assist/estimate.png';
import Profit from '../../assist/profit.png';
import Loss from '../../assist/loss.png';
import Wallet from '../../assist/wallet.png';
import { LineData } from '@/app/utils/DummyData';

const Dashboard = () => {
    return (
        <div className='bg-white rounded-2xl h-max w-[74.2%] 3xl:w-full'>
            <div className="flex p-6 gap-16 3xl:flex-wrap">
                {/* left */}
                <div className='3xl:flex 3xl:justify-between 3xl:items-center 3xl:w-full'>

                    <div className="heading">
                        <h3 className='font-bitter font-bold text-xl text-black'>Dashboard</h3>
                        <p className='capitalize font-bitter text-grey text-xs font-medium'>overview of this month</p>
                    </div>

                    <div className="monthearning mt-6 3xl:mt-0">
                        <h3 className='font-bitter font-bold text-xl text-black'>{Helper.currencyFormate(LineData[0].monthEarning)}</h3>
                        <p className='capitalize font-bitter text-grey text-xs font-medium'>this month earning</p>
                    </div>

                    <div className="monthesales mt-6 3xl:mt-0">
                        <h3 className='font-bitter font-bold text-xl text-black'>{LineData[0].monthSales}</h3>
                        <p className='capitalize font-bitter text-grey text-xs font-medium'>this month sales</p>
                    </div>

                    <div className="button mt-6 3xl:mt-0">
                        <button className='capitalize bg-purpal text-white text-[13px] font-bold rounded-lg px-3 py-2 font-bitter shadow-3xl'>last month overview</button>
                    </div>

                </div>


                {/* rightn */}

                <div className='w-[76%] 3xl:w-full'>
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-4 ps-12">
                            <button className='capitalize font-bitter text-grey text-sm font-medium'>daily</button>
                            <button className='capitalize font-bitter text-darkpurpal text-sm font-bold'>monthly</button>
                            <button className='capitalize font-bitter text-grey text-sm font-medium'>weekly</button>
                            <button className='capitalize font-bitter text-grey text-sm font-medium'>yearly</button>
                        </div>

                        <div className="flex items-center gap-8">
                            <p className='capitalize font-bitter text-black text-sm font-medium relative before:content-[""] before:absolute before:left-[-11px] before:top-[31%] before:translate-x-[-50%] before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#0B06F6]'>online</p>
                            <p className='capitalize font-bitter text-black text-sm font-medium relative before:content-[""] before:absolute before:left-[-11px] before:top-[31%] before:translate-x-[-50%] before:h-[8px] before:w-[8px] before:rounded-full before:bg-[#E931EC]'>store</p>
                        </div>
                    </div>
                    <LineChart data1={LineData[0].lineDataOne} data2={LineData[0].lineDataTwo} />
                </div>


            </div>


            <div className="border-t-2 border-t-[#f9f9f9] flex items-center">
                <div className="flex items-center gap-3 border-r-2 p-6 pe-24 2xl:pe-20 xl:p-4 border-r-[#f9f9f9]">
                    <Image src={Estimate} alt='Estimate' />
                    <div>
                        <p className='capitalize font-bitter text-grey text-sm font-medium'>estimate sale</p>
                        <p className='capitalize font-bitter text-black text-xs font-semibold'>{Helper.currencyFormate(LineData[0].estimateSale)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 border-r-2 p-6  pe-28 2xl:pe-20 xl:p-4 border-r-[#f9f9f9]">
                    <Image src={Profit} alt='Profit' />
                    <div>
                        <p className='capitalize font-bitter text-grey text-sm font-medium'>profit</p>
                        <p className='capitalize font-bitter text-black text-xs font-semibold'>{Helper.currencyFormate(LineData[0].profit)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 border-r-2 p-6  pe-28 2xl:pe-20 xl:p-4 border-r-[#f9f9f9]">
                    <Image src={Loss} alt='Loss' />
                    <div>
                        <p className='capitalize font-bitter text-grey text-sm font-medium'>loss</p>
                        <p className='capitalize font-bitter text-black text-xs font-semibold'>{Helper.currencyFormate(LineData[0].loss)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-6 xl:p-4">
                    <Image src={Wallet} alt='Wallet' />
                    <div>
                        <p className='capitalize font-bitter text-grey text-sm font-medium'>wallet balance</p>
                        <p className='capitalize font-bitter text-black text-xs font-semibold'>{Helper.currencyFormate(LineData[0].walletBalance)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
