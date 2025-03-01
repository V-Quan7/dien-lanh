"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from 'react'
import CustomPrevArrow from "./ProductSlider"

const Home = () => {
    const images = [
        "./home1.png",
        "./home2.png",
        "./home3.png",
        "./home4.png"
    ]
    return (
        <div>
            <div className=" max-w-[1200] m-auto">
                {/* 11111111111111111 */}
                <div>
                    <div className="mt-2 flex gap-2" >
                        <div className="  flex-[1] w-1/4">
                            {/* Sidebar */}
                            <aside className="  bg-white shadow-lg p-4">
                                <ul className="space-y-[3px] text-gray-700 ">
                                    <li className="font-bold border-b-2">Tivi, Loa - Dàn Âm Thanh</li>
                                    <li className="text-red-500 border-b-2">Máy giặt, Máy sấy quần áo</li>
                                    <li className="border-b-2">Điều hòa nhiệt độ</li>
                                    <li className="text-red-500">Sưởi các loại, Quạt mát</li>
                                    <li className="border-b-2">Máy xay, ép, pha chế</li>
                                    <li className="border-b-2">Máy lọc nước, máy rữa bát </li>
                                    <li className="border-b-2">Lọc không khí, hút bụi </li>
                                    <li className="border-b-2">Đồ bếp, nồi cơm điện</li>
                                    <li className="border-b-2">lò vi sóng, nồi chiên</li>
                                    <li className="border-b-2">Gia Dụng, dụng cụ</li>
                                    <li className="border-b-2">Laptop, Laptop AI</li>
                                    <li className="border-b-2">Điện Thoại, Tablet</li>
                                    <li className="border-b-2">PC, màn hình, máy in</li>
                                </ul>
                            </aside>
                        </div>
                        <div className="w-2/4">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop
                                className=" shadow-lg"
                            >{images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={src}
                                        alt={`Slide ${index + 1}`}
                                        className=" w-full h-auto object-cover"
                                    />
                                </SwiperSlide>
                            ))}

                            </Swiper>
                        </div>
                        <div className=" w-1/4 space-y-0">
                            {["/home5.png", "/home6.png", "/home7.png"].map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt="Hình ảnh minh họa"
                                    width={310}
                                    height={145}
                                    className="shadow-lg object-cover "
                                />
                            ))}
                        </div>
                    </div>

                </div>
                {/* 2222222222222222222 */}
                <div></div>
                {/* 333333333333333333 */}
                <div></div>
                {/* 44444444444444444 */}
                <div></div>
                {/* 5555555555555555555555 */}
                <div></div>
                {/* 6666666666666666666666 */}
                <div></div>
            </div>
        </div>
    )
}

export default Home
