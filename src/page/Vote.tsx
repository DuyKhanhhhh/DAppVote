import React, { useState } from 'react';
import { Breadcrumb, Button, message, Modal } from 'antd';
import Header from '../compoment/Header';
import { Link } from 'react-router-dom';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';


export default function Vote() {
    const [count, setCount] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        messageApi.open({
            type: 'success',
            content: 'Vote Success',
        });
        setCount(1);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {contextHolder}
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
                    <div className='text-3xl blood text-center font-bold'>Vote for Miss</div>
                    <div className='text-right'>12/2/2024 - 14/2/2025</div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='bg-[#BBEAE4] sm:col-span-1 mx-20 rounded-lg '>
                            <div className="px-10 pt-5 h-140">
                                <img
                                    src="https://i.pinimg.com/736x/7d/18/f0/7d18f0a531e30ea0413ee44c1165aeaa.jpg"
                                    alt="Mô tả ảnh"
                                    className='w-full h-full object-cover rounded-md
'
                                />
                            </div>
                            <div className='text-center'>
                                <div className='text-xl'>
                                    Hoa Hau A
                                </div>
                                <div>
                                    Hayy binh chon cho minh
                                </div>
                                <div className='text-center mb-3'>
                                    <Button onClick={() => setCount(count - 1)} disabled={count <= 1} icon={<MinusOutlined />} />
                                    <span style={{ margin: '0 10px' }}>{count}</span>
                                    <Button onClick={() => setCount(count + 1)} icon={<PlusOutlined />} />
                                    <br />
                                    <Button color="cyan" variant="solid" style={{ marginTop: '8px' }} onClick={showModal}>
                                        Confirm Vote
                                    </Button>
                                    <Modal title="Confirm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                        <p>Some contents...</p>
                                    </Modal>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
