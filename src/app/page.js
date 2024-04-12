"use client";
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Traffic from './components/traffic/Traffic';
import { Bonus, PageView, Revenue, TableData } from './utils/DummyData';
import { Helper } from './utils/Helper';
import LineChartSmall from './charts/LineChartSmall';
import VerticalChart from './charts/VerticalChart';
import HorizontalChart from './charts/HorizontalChart';
import RecentItems from './components/recentItems/RecentItems';
import Task from "./assist/taskicon.png";
import Deal from "./assist/dealicon.png";
import Published from "./assist/publishedicon.png";
import Dock from "./assist/dockicon.png";
import Replyed from "./assist/replayedicon.png";
import Info from "./assist/info 1 (traced).png";
import Printer from "./assist/printer 1 (traced).png";
import SettingSlider from "./assist/settings-sliders 1 (traced).png";
import Search from "./assist/search.png";
import Image from 'next/image';


const page = () => {
    return (
        <div className='bg-[#f2f2f2] w-full h-max p-6 pe-14'>

            <div className="flex gap-5 3xl:flex-wrap">
                {/* left */}

                <Dashboard />

                {/* right */}

                <Traffic />

            </div>

            <div className="flex flex-wrap gap-[1.2rem] my-6">


                <div className="revenue rounded-2xl h-[154px] w-[23.94%] 3xl:w-[48.8%] xl:w-full p-6">
                    <h4 className='text-white text-lg font-semibold font-bitter capitalize'>revenue status</h4>
                    <div className="flex">
                        {/* left */}
                        <div className='flex flex-col justify-between items-start'>
                            <h4 className='text-white text-lg font-semibold font-bitter capitalize'>{Helper.currencyFormate(Revenue[0].perHour)} <span className='font-normal text-xs'>per hour</span></h4>

                            <button className='text-white font-bitter capitalize font-normal text-xs mt-auto'>Show More</button>
                        </div>
                        {/* right */}
                        <LineChartSmall data1={Revenue[0].lindeData} tension={0.4} borderColor={'#0B06F6'} bgColor={['rgba(137, 108, 230, 1)', 'rgba(164, 118, 215, 1)']} />
                    </div>
                </div>


                <div className="page rounded-2xl h-[154px] w-[23.94%] 3xl:w-[48.8%] xl:w-full p-6">
                    <h4 className='text-white text-lg font-medium font-bitter capitalize'>page view</h4>
                    <div className="flex">
                        {/* left */}
                        <div className='flex flex-col justify-between items-start'>
                            <h4 className='text-white text-lg font-semibold font-bitter capitalize'>{PageView[0].user}k users <span className='font-normal text-xs'>per hour</span></h4>

                            <button className='text-white font-bitter capitalize font-normal text-xs mt-auto'>Show More</button>
                        </div>
                        {/* right */}
                        <VerticalChart data1={PageView[0].viewData} />
                    </div>
                </div>


                <div className="bonus rounded-2xl h-[154px] w-[23.94%] 3xl:w-[48.8%] xl:w-full p-6">
                    <h4 className='text-white text-lg font-medium font-bitter capitalize'>bounce rate</h4>
                    <div className="flex">
                        {/* left */}
                        <div className='flex flex-col justify-between items-start'>
                            <h4 className='text-white text-lg font-semibold font-bitter capitalize'>{Helper.currencyFormate(Bonus[0].perHour)} Growth <span className='font-normal text-xs'>per hour</span></h4>

                            <button className='text-white font-bitter capitalize font-normal text-xs mt-auto'>Show More</button>
                        </div>
                        {/* right */}
                        <HorizontalChart data1={Bonus[0].viewData} />
                    </div>
                </div>


                <div className="overall rounded-2xl h-[154px] w-[23.94%] 3xl:w-[48.8%] xl:w-full p-6">
                    <h4 className='text-white text-lg font-medium font-bitter capitalize'>overall performance</h4>
                    <div className="flex gap-4">
                        {/* left */}
                        <div className='flex flex-col justify-between items-start'>
                            <h4 className='text-white text-lg font-semibold font-bitter capitalize'>excellent</h4>

                            <button className='text-white font-bitter capitalize font-normal text-xs mt-auto'>Show More</button>
                        </div>
                        {/* right */}
                        <LineChartSmall data1={Bonus[0].viewData} tension={0} borderColor={'#ED8BCC'} const bgColor={['rgba(201, 240, 242, 1)', 'rgba(255, 255, 255, 0)']}
                        />
                    </div>
                </div>



            </div>


            {/* table */}

            <div className="flex flex-wrap gap-5">
                {/* left */}
                <div className="w-[31%] bg-white rounded-2xl p-6 pb-8 3xl:w-full">
                    <h4 className='capitalize font-bitter font-bold'>recent activities</h4>

                    <div className="mt-4">
                        <RecentItems time={"12 min age"} Icon={Task} heading={"task updated"} sub={"lorem lipsum"} bg={"#8992B4"} />
                    </div>

                    <div className="mt-6">
                        <RecentItems time={"14 min age"} Icon={Deal} heading={"deal added"} sub={"lorem lipsum"} bg={"#C9ABF3"} />
                    </div>

                    <div className="mt-6">
                        <RecentItems time={"23 min age"} Icon={Published} heading={"published article"} sub={"lorem lipsum"} bg={"#97B8F9"} />
                    </div>

                    <div className="mt-6">
                        <RecentItems time={"24 min age"} Icon={Dock} heading={"dock updated"} sub={"lorem lipsum"} bg={"#8986DF"} />
                    </div>

                    <div className="mt-6">
                        <RecentItems time={"28 min age"} Icon={Replyed} heading={"replayed comment"} sub={"lorem lipsum"} bg={"#F0AEF5"} />
                    </div>
                </div>

                {/* right */}

                <div className="bg-white rounded-2xl p-6 overflow-hidden w-[67%] 3xl:w-full">

                    <div className="flex justify-between items-center">
                        {/* left */}
                        <div>
                            <h3 className='capitalize text-black font-bold text-base font-bitter'>order status</h3>
                            <p className='capitalize text-grey font-normal text-xs font-bitter'>this month overview</p>

                            <div className="flex items-center gap-3 mt-4">
                                <button className='px-4 h-[32px] bg-[#D96CF2] rounded-md text-white font-bitter text-sm font-montserrat'>Add</button>
                                <div className="w-[32px] h-[32px] rounded-md bg-[#DDDDDD] shadow-4xl flex justify-center items-center cursor-pointer">
                                    <Image src={Info} alt='info' />
                                </div>
                                <div className="w-[32px] h-[32px] rounded-md bg-[#DDDDDD] shadow-4xl flex justify-center items-center cursor-pointer">
                                    <Image src={Printer} alt='printer' />
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className='flex flex-col items-end gap-3'>
                            <button className='flex items-center capitalize p-2 gap-2 font-bitter border border-[#8733FF] shadow-4xl rounded-2xl font-semibold text-sm text-[#941CB0]'><Image src={SettingSlider} alt='setting' /> this month</button>

                            <div className="relative">
                                <input type="text" placeholder='Search' className='bg-[#EEEEEE] border-0 outline-0 rounded-lg p-2 ps-12 w-[180px]' />
                                <Image src={Search} alt='search' className='absolute top-1/2 translate-y-[-50%] left-6' />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-auto mt-6">
                        <div className='w-full overflow-auto'>
                            <div className='bg-[#1A283F] rounded-2xl py-3 flex flex-nowrap items-center'>
                                <div className='uppercase font-semibold text-sm text-white text-center w-[145px]'>invoice</div>
                                <div className='uppercase font-semibold text-sm text-white text-center w-[223px]'>customers</div>
                                <div className='uppercase font-semibold text-sm text-white text-center w-[203px]'>from</div>
                                <div className='uppercase font-semibold text-sm text-white text-center w-[129px]'>price</div>
                                <div className='uppercase font-semibold text-sm text-white text-center w-[202px]'>status</div>
                            </div>

                            {
                                TableData.map((item, index) => (
                                    <div key={index} style={{ border: index === TableData.length - 1 && 'none' }} className="flex flex-nowrap items-center border-b">
                                        <div className='uppercase font-semibold text-xs text-black text-center py-1 w-[145px]'>{item.invoice}</div>
                                        <div className='uppercase font-semibold text-xs text-black text-center py-1 w-[223px]'>{item.customers}</div>
                                        <div className='uppercase font-semibold text-xs text-black text-center py-1 w-[203px]'>{item.from}</div>
                                        <div className='uppercase font-semibold text-xs text-black text-center py-1 w-[129px]'>{Helper.currencyFormate(item.price)}</div>
                                        <div className='flex justify-center py-1 w-[202px]'>
                                            <p style={{ background: Helper.bgColor(item.status) }} className='uppercase font-normal text-xs text-white text-center py-1 rounded w-[80px]'>{item.status}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
