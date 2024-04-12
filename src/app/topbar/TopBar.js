import Image from 'next/image';
import React from 'react';
import Menu from '../assist/menu (1) (traced).png';
import Notification from "../assist/Vector.png";
import Mail from "../assist/mail.png";
import Men from "../assist/Ellipse 3.png";

const TopBar = () => {
    return (
        <div className='h-[76px] px-6 pe-14 flex justify-between items-center'>
            <Image src={Menu} alt='menu' className='cursor-pointer' />
            <div className="flex items-center gap-4">
                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-lightgrey relative cursor-pointer">
                    <Image src={Notification} alt='notification' />
                    <div className="h-[10px] w-[10px] rounded-full absolute top-[9px] right-[9px] bg-pink"></div>
                </div>
                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-lightgrey cursor-pointer">
                    <Image src={Mail} alt='notification' />
                </div>
                <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center overflow-hidden cursor-pointer">
                    <Image src={Men} alt='notification' />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
