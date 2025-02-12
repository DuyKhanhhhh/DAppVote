import React, { useState } from 'react'
import Header from '../compoment/Header'
import { Breadcrumb, Steps, DatePicker, Space, Button, message, TimePicker } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Link } from 'react-router-dom';

const steps = [
    {
        title: 'First',
        content: 'First-content',
    },
    {
        title: 'Second',
        content: 'Second-content',
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];


export default function CreateVote() {
    //current Create Vote
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    // OnClick Date
    const { RangePicker } = DatePicker;

    // TimePicker
    const format = 'HH:mm:ss';

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
                                title: 'Create Vote'
                            },
                        ]}
                    />
                </div>
                <div className='mb-5'>
                    <Steps current={current} items={items} />
                </div>
                <div className='bg-white rounded-lg shadow-lg h-150'>
                    {current === 0 ? (
                        <div className='text-center text-4xl p-6'><b>Create Vote</b></div>

                    ) : current === 1 ? (
                        <div className='text-center text-4xl p-6'><b>Create Vote</b></div>

                    ) : (
                        <div className='p-10'></div>
                    )}
                    <div className='bg-[#E7FFFF] h-100 mx-40 rounded-md shadow-lg '>

                        {current === 0 ? (
                            <form className='mx-40'>
                                <div className="p-2">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <div className="mt-2">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm/6 font-medium text-gray-900"
                                                >
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <div className="">
                                                <label
                                                    htmlFor="street-address"
                                                    className="block text-sm/6 font-medium text-gray-900"
                                                >
                                                    Description:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm/6 font-medium text-gray-900">Date</label>
                                            <div className="mt-2 ">
                                                <Space direction="vertical" size={12}>
                                                    <RangePicker />
                                                </Space>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3 ">
                                            <label className="block text-sm/6 font-medium text-gray-900">Time</label>
                                            <div className="mt-2">
                                                <TimePicker.RangePicker format={format} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        ) : current === 1 ? (
                            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mx-40 pt-5">
                                <div className="col-span-3">
                                    <div className="mt-2 mb-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-18">
                                        <div className="text-center">
                                            <svg
                                                className="mx-auto size-12 text-gray-300"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-6'>
                                        <div className="col-span-1">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-900 mr-2"
                                            >
                                                Name:
                                            </label>

                                        </div>
                                        <div className="col-span-5">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-2 py-1 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-900 mr-2"
                                            >
                                                Description:
                                            </label>
                                        </div>
                                        <div className="col-span-5">

                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-2 py-1 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <div className="mt-2 mb-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-18">
                                        <div className="text-center">
                                            <svg
                                                className="mx-auto size-12 text-gray-300"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 gap-x-20 gap-y-4 sm:grid-cols-6'>
                                        <div className="col-span-1">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-900 mr-2"
                                            >
                                                Name:
                                            </label>

                                        </div>
                                        <div className="col-span-5">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-2 py-1 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-900 mr-2"
                                            >
                                                Description:
                                            </label>
                                        </div>
                                        <div className="col-span-5">

                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-2 py-1 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ) : (
                            <div>
                                <DotLottieReact
                                    src="https://lottie.host/e6aee7cd-f2d8-4e08-8e4c-47b462426317/jonBfgC3K8.lottie"
                                    loop
                                    autoplay
                                    className='w-200'
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex justify-between mt-5'>
                    {current > -1 && (
                        <Button onClick={() => prev()} disabled={current <= 0}>
                            Back
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Create complete!')}>
                            Done
                        </Button>
                    )}
                </div>
            </div >

        </div >
    )
}
