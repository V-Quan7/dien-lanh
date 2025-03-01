"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from 'react'
import CustomPrevArrow from "./ProductSlider"

const Home = () => {
    return (
        <div >
            <div className='flex-[3_3_0%] mt-5'>
                <div className="flex gap-4 max-w-[1200px] mx-auto">
                    {/* Slider chính bên trái */}
                    <div className=" w-3/4">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{ delay: 3000 }}
                            loop
                            className="rounded-lg overflow-hidden"
                        >
                            <SwiperSlide>
                                <img
                                    src="https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png"
                                    alt="Slide 1"
                                    className="w-full h-[350px] object-cover"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png"
                                    alt="Slide 2"
                                    className="w-full h-[350px] object-cover"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://cdn.flyonui.com/fy-assets/components/carousel/image-16.png"
                                    alt="Slide 3"
                                    className="w-full h-[350px] object-cover"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Danh sách quảng cáo bên phải */}
                    <div className="w-1/4 flex flex-col gap-4">
                        <img
                            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png"
                            alt="Ad 1"
                            className="rounded-lg shadow-md"
                        />
                        <img
                            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png"
                            alt="Ad 2"
                            className="rounded-lg shadow-md"
                        />
                        <img
                            src="https://cdn.flyonui.com/fy-assets/components/carousel/image-8.png"
                            alt="Ad 3"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className='flex-[1_1_0%]'>

            </div>
            <CustomPrevArrow />
        </div>
    )
}

export default Home
