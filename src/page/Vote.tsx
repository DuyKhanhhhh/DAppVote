import React from 'react'
import { Breadcrumb, Image } from 'antd';
import Header from '../compoment/Header';
import { Link } from 'react-router-dom';
import { BsCalendarDate } from "react-icons/bs";

export default function Vote() {
    return (
        <div>
            <Header />
            <div className='container mx-auto'>
                <div className='my-5'>
                    <Breadcrumb
                        items={[
                            {
                                title: <Link to={'/'}>Home</Link>,
                            },
                            {
                                title: <Link to={'/listVote'}>List Vote</Link>,
                            },
                            {
                                title: 'Vote'
                            },
                        ]}
                    />
                </div>
                <div className='bg-white p-4'>
                    <div className="grid grid-cols-3 gap-8">
                        <div></div>
                        <div className='text-2xl text-center'>Miss</div>
                        <div className='text-right'><BsCalendarDate />12/2/2024 - 14/2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className="px-4 p-4 h-130">
                                <Image
                                    src="https://i.pinimg.com/736x/7d/18/f0/7d18f0a531e30ea0413ee44c1165aeaa.jpg"
                                    alt="Mô tả ảnh"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className="px-4 p-4 h-150">
                                <Image
                                    src="https://i.pinimg.com/736x/10/7f/aa/107faae1cf0be5bdb89ca61eda99b95f.jpg"
                                    alt="Mô tả ảnh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
