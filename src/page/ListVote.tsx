import React from 'react'
import Header from '../compoment/Header'
import { Breadcrumb, Pagination, Empty } from 'antd';
import { Link } from 'react-router-dom'
import useGetAllVote from '../hook/useGetAllUsers';
export default function ListVote() {
    const { votes } = useGetAllVote();


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
                            }
                        ]}
                    />
                </div>
                <div className='bg-white p-4'>
                    <div className="grid grid-cols-4 gap-8">
                        {votes && votes[0]?.length > 0 ? (
                            votes[0].map((_, index: number) => (
                                <Link key={index} to={`/vote/${index}`}>
                                    <div className='bg-[#BBEAE4] sm:col-span-1 rounded-lg'>
                                        <div className="px-4 pt-4 h-75">
                                            <img src="https://i.pinimg.com/736x/10/7f/aa/107faae1cf0be5bdb89ca61eda99b95f.jpg"
                                                alt="Ảnh ứng viên"
                                                className="w-full h-full object-cover rounded-sm"
                                            />
                                        </div>
                                        <div className='text-center text-lg'>
                                            {votes[0][index]}
                                        </div>
                                        <div className='text-center text-sm pb-1'>
                                            {votes[1][index]}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <Empty />
                        )}

                    </div>
                </div>
                <div className='mt-5'>
                    <Pagination align="center" defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}
