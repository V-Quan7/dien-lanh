import React from 'react'
import Image from 'next/image';
const footer = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto pt-10 '>
                {/* one */}
                <div className='flex justify-around leading-loose bg-slate-100 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4'>
                    <div>
                        <ul>
                            <li className='text-orange-500'>THÔNG TIN MEDIAMART</li>
                            <li>Hệ thống 400 siêu thị(8:30-21:00)</li>
                            <li>Giới thiệu công ty </li>
                            <li>Tuyển dụng </li>
                            <li>Liên hệ và góp ý</li>
                            <li>Phương thức thanh toán</li>
                        </ul>

                    </div>
                    <div>
                        <ul>
                            <li className='text-orange-500'>Hổ trợ khách hàng </li>
                            <li>Hướng dẫn mua hàng online</li>
                            <li>Mua Hàng trả góp</li>
                            <li>Giao hàng về lắp đặt</li>
                            <li>Quy chế hoạt động</li>
                            <li>In hóa đơn điện tử</li>
                            <li>Tra cứu bảo hành </li>
                            <li>Cảnh báo mao danh lừa đảo</li>
                        </ul>

                    </div>
                    <div>
                        <ul>
                            <li className='text-orange-500'>Hỗ trợ khách hàng</li>
                            <li>Bán hàng: 1900 6788</li>
                            <li>Khiếu nại, Bảo hành:</li>
                            <li>1900 6741 / 1900 6743</li>
                            <li>Chính sách 30 ngày đổi mới</li>
                            <li>Mua hàng Dự án/ Doanh nghiệp</li>
                        </ul>
                    </div>
                    <div>
                        <span className='text-orange-500'>Theo giỏi MeDiaMart trên</span>
                        <div className='icon'>
                            <ul className='flex space-x-2'>
                                <li>
                                    <a href="">
                                        <img src="mediamart-facebook-fanpage_7b8f3ccc.png" alt="tiktok" />
                                    </a>
                                </li>                                <li>
                                    <a href="">
                                        <img src="zalo.png" alt="tiktok" />
                                    </a>
                                </li>                                <li>
                                    <a href="">
                                        <img src="youtobe.png" alt="tiktok" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <span className='text-orange-500'>MediaMart Tiktok Channel</span>
                        <img src="tiktok.png" alt="" />
                    </div>

                </div>
                {/* tow */}
                <hr />
                <div className=' text-center'>
                    <b>Văn @ Quân</b>
                </div>
            </div>

        </div>
    )
}

export default footer
