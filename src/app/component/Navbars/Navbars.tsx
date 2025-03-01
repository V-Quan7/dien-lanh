"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiGooglemaps } from 'react-icons/si'
import { RiFridgeLine } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
const Navbars = () => {
    const [open, setOpen] = useState(false);
    const categories = [
        { name: "tivi,  ", icon: <RiFridgeLine /> },
        { name: "Tủ lanh, " },
        { name: "máy giặt, " },
        { name: "máy xấy" },
        { name: "máy hút ẩm" },
        { name: "tủ xấy quần áo" },
        { name: "laptop" },
        { name: "điện thoại" },
    ]
    return (
        <div >
            <div className=" ">
                {/* navbar-hearder--------------------------------- */}
                <div className="box-hearder-navbar max-h-[80px] bg-[#E83E8C] text-white">

                    <div className="max-w-[1200px] mx-auto flex p-3" >
                        {/* logo */}
                        <div className="flex-[1_1_0%] pt-4 flex-shrink-0">
                            <Link href="/">
                                <Image src="/logo.png" alt="Logo" width={200} height={150} />
                            </Link>

                        </div>
                        {/* call end address */}
                        <div className=" justify-around flex-[3_3_0%] pt-4 hidden lg:flex">
                            <div>
                                <div className="phone">

                                    <div className='flex items-center '>
                                        <div className='text-2xl pr-3'>
                                            <FaPhoneAlt />
                                        </div>
                                        <div className='text-xs'>
                                            <b>19006788</b><br />
                                            <span>Tư vấn bán hàng</span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div>

                                <div className="address">
                                    <div className='flex items-center '>
                                        <div className='text-2xl pr-3'>
                                            <SiGooglemaps />
                                        </div>
                                        <div className='text-xs'>
                                            <b>Tìm siêu thị</b><br />
                                            <span>Mở cửa:8:00 - 21:00</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="cart pr-9">
                                    <div className='flex items-center '>
                                        <div className='text-2xl pr-3'>
                                            <FaOpencart />
                                        </div>
                                        <div className='text-xs'>
                                            <span>Giỏ Hàng</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="box-find flex-[2_2_0%] mt-[-10px]">
                            <div>
                                <ul className='flex py-2 space-x-4 text-xs justify-end '>
                                    <li className=" hover:text-blue-700 hover:underline transition cursor-pointer">Tin khuyến mãi</li>
                                    <li className=" hover:text-blue-700 hover:underline transition cursor-pointer">Tư vấn</li>
                                    <li className=" hover:text-blue-700 hover:underline transition cursor-pointer">
                                        <Link href="/login">Đăng nhập

                                        </Link >                                  </li>
                                    <li className="hover:text-blue-700 hover:underline transition cursor-pointer">
                                        <Link href={'/login'}>Đăng ký</Link>
                                    </li>
                                </ul>

                            </div>
                            <div >
                                <form action="">
                                    <div className="bg-white rounded ">
                                        <input
                                            type="find"
                                            placeholder='tìm kiếm....'
                                            className="outline-none text-black rounded w-[93%] border relative border-none text-xs pl-3 pb-2"
                                        />
                                        <span className="absolute text-2xl text-black cursor-pointer">
                                            <CiSearch />
                                        </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* menu-hearder */}
            <div className="shadow-lg bg-white">
                {/* Navbar Desktop */}
                <div className=" max-w-[900px] m-auto flex p-4">
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        <FaBars />
                    </button>

                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-900">
                        <span className="font-bold">Tivi</span>
                        <span className="font-bold">Tủ lạnh</span>
                        <span className="text-red-600 font-bold">Máy giặt</span>
                        <span className="text-red-600 font-bold">🔥 Máy sấy</span>
                        <span className="text-red-600 font-bold">⚡ Máy hút ẩm (-45%)</span>
                        <span className="text-red-600 font-bold">🔥 Tủ sấy quần áo</span>
                        <span className="font-bold">Laptop</span>
                        <span className="font-bold">iPhone 16 Series</span>
                    </nav>
                </div>

                {/* Navbar Mobile */}
                {open && (
                    <div className="lg:hidden bg-gray-100 p-4">
                        {categories.map((item, index) => (
                            <div key={index} className="py-2 border-b border-gray-300 text-center">
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>


        </div>

    )
}

export default Navbars



