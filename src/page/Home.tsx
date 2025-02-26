import React, { useState } from 'react'
import '../css/Home.css'
import { GoArrowRight } from "react-icons/go";
import { Modal } from 'antd';


import HeaderHome from '../compoment/HeaderHome'
import { Link } from 'react-router-dom';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="bg-[url('https://i.postimg.cc/qRZPS8HS/bg.png')] h-230 bg-cover bg-center">
            <div className=''>
                <HeaderHome />
                <div className='static'>
                    <div className='absolute bottom-30 left-46 text-wrap'>
                        <h1 className='text-2xl font-bold'>Vote: The Secure Voting Application</h1>
                        <div className='w-160'>
                            <span>
                                Our voting application leverages blockchain technology to
                                ensure secure and transparent elections. With end-to-end encryption,
                                every vote is recorded immutably, preventing fraud and enhancing trust.
                                Users can easily cast their votes online, track results, and engage in community discussions.
                                Experience the future of voting with our reliable and user-friendly platform, designed to encourage
                                civic participation and uphold democratic values.
                            </span>
                        </div>
                        <div className='button-started w-40' onClick={showModal}>
                            <div className='flex justify-center items-center'>Get started<GoArrowRight className='text-2xl font-bold ml-1' /> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Click Open" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                footer={[
                ]}
                maskClosable={true}
                keyboard={true}
                width={320} >
                <div className='flex justify-between '>
                    <Link to={'/createVote'}>
                        <div className='button-create-vote w-30'>
                            Create Vote
                        </div>
                    </Link>
                    <Link to={'/listVote'}>
                        <div className='button-create-vote w-30'>
                            Join Vote
                        </div>
                    </Link>
                </div>
            </Modal>
        </div >

    )
}
