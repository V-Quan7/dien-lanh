"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Electrolux Inverter 10Kg",
        img: "/product1.png",
        price: "7.990.000 đ",
        oldPrice: "11.490.000 đ",
        discount: "-30%",
    },
    {
        id: 2,
        name: "LG AI DD Inverter 10Kg",
        img: "/product1.png",
        price: "9.990.000 đ",
        oldPrice: "15.690.000 đ",
        discount: "-36%",
    },
    {
        id: 3,
        name: "Coex 8,5kg CD-80AVBG",
        img: "/product1.png",
        price: "6.990.000 đ",
        oldPrice: "9.900.000 đ",
        discount: "-29%",
    },
    {
        id: 4,
        name: "Máy hút ẩm 12L Kosmen",
        img: "/product1.png",
        price: "3.690.000 đ",
        oldPrice: "6.370.000 đ",
        discount: "-42%",
    },
    {
        id: 5,
        name: "Máy hút ẩm 20L Roler",
        img: "/product1.png",
        price: "5.490.000 đ",
        oldPrice: "7.990.000 đ",
        discount: "-31%",
    },
];

// Nút điều hướng trái
const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bg-opacity-70 left-[-40px] top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-600"
    >
        <FaChevronLeft size={20} />
    </button>
);

// Nút điều hướng phải
const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bg-opacity-70 right-[-40px] top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-600"
    >
        <FaChevronRight size={20} />
    </button>
);

const ProductSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="container mx-auto px-4 pt-10">
            <div className="max-w-[1200px] mx-auto rounded-lg p-6 bg-red-600 shadow-lg">
                <div className="cart-benner-top flex">
                    <div className="anh1 flex-1[1_1_0%]">
                        <img src="/benner_am.png" alt="" />
                    </div>
                    <div className="flex-1[1_1_0%] ">
                        <img src="/benner_am.png" alt="" />
                    </div>
                </div>
                <Slider {...settings}>
                    {products.map((item) => (
                        <div key={item.id} className="p-2">
                            <div className="border rounded-lg shadow-lg p-4 text-center bg-white max-w-[236px] max-h-[433px]">
                                <div className="cart-img-top">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                        className="mx-auto rounded-md object-cover"
                                    />
                                </div>
                                <div className="cart-body float-left">
                                    <h3 className="text-blue-500 text-sm leading-[21px] h-[42px] truncate mb-2">{item.name}</h3>
                                    <ul className="flex text-xs pl-0">
                                        <li className="float-left border border-gray-500 rounded-sm text-gray-500 inline-block text-xs leading-3 mr-1.5 px-1.5 py-1 mb-1.5 whitespace-nowrap">cưa ngang</li>
                                        <li className="float-left border border-gray-500 rounded-sm text-gray-500 inline-block text-xs leading-3 mr-1.5 px-1.5 py-1 mb-1.5 whitespace-nowrap">inveter</li>
                                        <li className="float-left border border-gray-500 rounded-sm text-gray-500 inline-block text-xs leading-3 mr-1.5 px-1.5 py-1 mb-1.5 whitespace-nowrap">10kg</li>
                                    </ul>
                                    <p className="text-red-500 font-bold pl-0">{item.price}</p>
                                    <p className="line-through text-gray-500">{item.oldPrice}</p>
                                    <p className="text-green-500">{item.discount}</p>
                                </div>
                                <div className="product-promotionshort text-gray-900 px-2.5 text-xs">
                                    Tặng PMH 200.000đ
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;
