"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assist/Logo.png";
import { CalendarIcon, CategoryIcon, DashboardIcon, LogOutIcon, OrderIcon, ProductsIcon, SettingIcon, TodoIcon } from '../assist/Svg';
const Sidebar = () => {
    return (
        <div className='h-screen w-[300px]'>
            <div className="flex items-center gap-3 px-6 py-2 bg-lightblue">
                <Image src={Logo} alt='logo' />
                <span className='uppercase font-bold text-xl text-blue montserrat'>my dashboard</span>
            </div>

            <div className="flex flex-col mt-10">
                <div className="navlink active  relative flex items-center gap-2 px-8 py-2">
                    <DashboardIcon />
                    <Link className='text-purpal font-bitter text-xl font-semibold' href={"/"}>Dashboard</Link>
                </div>
                <div className="navlink flex items-center gap-2 px-8 py-2">
                    <CategoryIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>Category</Link>
                </div>
                <div className="navlink flex items-center gap-2 px-8 py-2">
                    <ProductsIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>Products</Link>
                </div>
                <div className="navlink flex items-center gap-2 px-8 py-2">
                    <OrderIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>Orders</Link>
                </div>
                <div className="navlink flex items-center gap-2 px-8 py-2">
                    <TodoIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>To Do List</Link>
                </div>
                <div className="navlink flex items-center gap-2 px-8 py-2">
                    <CalendarIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>Calendar</Link>
                </div>
            </div>

            <div className="mt-8">
                <p className='uppercase text-sm text-grey font-normal px-8 py-2'>other</p>

                <div className="navlink flex items-center px-8 py-2 gap-2">
                    <SettingIcon />
                    <Link className='text-grey font-bitter  text-lg font-medium' href={"/"}>Setting</Link>
                </div>
                <div className="navlink flex items-center px-8 py-2 gap-2">
                    <LogOutIcon />
                    <p className='text-grey font-bitter  text-lg font-medium cursor-pointer'>Log Out</p>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
