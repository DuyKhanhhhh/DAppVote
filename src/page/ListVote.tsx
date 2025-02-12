import React from 'react'
import Header from '../compoment/Header'
import { Breadcrumb, Pagination } from 'antd';
import { Link } from 'react-router-dom'

export default function ListVote() {
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
                                title: 'List Vote',
                            },
                            // {
                            //     title: <Link to={'/vote'}>Vote</Link>,
                            // },
                        ]}
                    />
                </div>
                <div className='bg-white p-4'>
                    <div className="grid grid-cols-4 gap-8">
                        <Link to={'/vote'}>
                            <div className='bg-[#BBEAE4] sm:col-span-1 '>
                                <div className="px-4 pt-4 h-75">
                                    <img
                                        src="https://i.pinimg.com/736x/7d/18/f0/7d18f0a531e30ea0413ee44c1165aeaa.jpg"
                                        alt="Mô tả ảnh"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className='text-center text-lg'>
                                    Hoa Hau A
                                </div>
                                <div className='text-center text-sm pb-1'>
                                    Hay binh chon cho toi
                                </div>
                            </div>
                        </Link>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                        </div>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className=''>01</div>
                        </div>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className=''>01</div>
                        </div>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className="px-4 pt-4 h-75">
                                <img
                                    src="https://i.pinimg.com/736x/10/7f/aa/107faae1cf0be5bdb89ca61eda99b95f.jpg"
                                    alt="Mô tả ảnh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className='text-center text-lg'>
                                Hoa Hau A
                            </div>
                            <div className='text-center text-sm pb-1'>
                                Hay binh chon cho toi
                            </div>
                        </div>
                        <div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className=''>01</div>
                        </div><div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className=''>01</div>
                        </div><div className='bg-[#BBEAE4] sm:col-span-1 '>
                            <div className=''>01</div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Pagination align="center" defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}
