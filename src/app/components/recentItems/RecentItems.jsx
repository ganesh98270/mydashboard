import Image from 'next/image';
import React from 'react';

const RecentItems = ({ time, Icon, heading, sub, bg }) => {
    return (
        <div className='flex items-center gap-8'>
            <p className='text-grey font-normal text-sm font-bitter'>{time}</p>
            <div className="flex items-center gap-6">
                <div style={{ background: bg }} className={`flex justify-center items-center h-[40px] w-[40px] rounded-full`}>
                    <Image src={Icon} alt='icon' />
                </div>
                <div>
                    <h4 className='capitalize text-black font-semibold text-sm font-bitter'>{heading}</h4>
                    <p className='capitalize text-grey font-normal text-[10px] font-bitter'>{sub}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentItems;
