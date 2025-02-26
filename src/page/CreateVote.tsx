import React, { useState } from 'react'
import Header from '../compoment/Header'
import { Breadcrumb, Steps, DatePicker, Button, Result } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import useCreateContract from '../hook/useCreateContract';

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
        title: 'Done',
        content: 'Done-content',
    },
];


export default function CreateVote() {
    // const navigate = useNavigate();
    //current Create Vote
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const { createVote } = useCreateContract();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [endTime, setEndTime] = useState("");
    const [candidates, setCandidates] = useState([
        { image: "", name: "", introduce: "" },
        { image: "", name: "", introduce: "" },
    ]);
    console.log("Log", candidates);

    const handleInputChange = (index, field, value) => {
        setCandidates((prevCandidates) => {
            const updatedCandidates = [...prevCandidates];
            updatedCandidates[index][field] = value;
            return updatedCandidates;
        });
    };

    const handleFileChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCandidates((prevCandidates) => {
                    const updatedCandidates = [...prevCandidates];
                    updatedCandidates[index].image = reader.result;
                    return updatedCandidates;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const addCandidate = () => {
        setCandidates((prevCandidates) => [...prevCandidates, { image: "", name: "", introduce: "" }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (candidates.length < 2) {
            alert("Mỗi cuộc bình chọn cần ít nhất 2 ứng viên!");
            return;
        }
        const startTime = Math.floor(Date.now() / 1000);
        const endTimeUnix = Math.floor(new Date(endTime).getTime() / 1000);
        const images = candidates.map((c) => c.image);
        const names = candidates.map((c) => c.name);
        const introduces = candidates.map((c) => c.introduce);

        await createVote(title, description, startTime, endTimeUnix, images, names, introduces);
    };


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
                        <form className='mx-35' onSubmit={handleSubmit}>
                            {current === 0 ? (
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
                                                    autoComplete="street-address"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
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
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    autoComplete="street-address"
                                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label className="block text-sm/6 font-medium text-gray-900">Date</label>
                                            <div className="mt-2 ">
                                                <DatePicker
                                                    selected={endTime}
                                                    onChange={(date) => setEndTime(date)}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="w-full border p-2 rounded"
                                                    placeholderText="Chọn ngày..."
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ) : current === 1 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {candidates.map((candidate, index) => (
                                        <div key={index} className="p-4 mt-15 rounded-lg bg-white shadow-md">
                                            <div className="flex flex-col items-center">
                                                <div className="w-full flex justify-center mb-4">
                                                    <label
                                                        htmlFor={`file-upload-${index}`}
                                                        className="relative flex flex-col items-center cursor-pointer border border-dashed border-gray-400 rounded-lg p-4 w-full text-center hover:border-indigo-600"
                                                    >
                                                        <svg
                                                            className="size-12 text-gray-300"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span className="text-indigo-600 font-semibold">Upload a file</span>
                                                        <input
                                                            onChange={(e) => handleFileChange(index, e)}
                                                            id={`file-upload-${index}`}
                                                            name="file-upload"
                                                            type="file"
                                                            className="sr-only"
                                                        />
                                                    </label>
                                                </div>

                                                <div className="w-full mb-3">
                                                    <label className="block text-sm font-medium text-gray-900">Name:</label>
                                                    <input
                                                        value={candidate.name}
                                                        onChange={(e) => handleInputChange(index, "name", e.target.value)}
                                                        type="text"
                                                        className="w-full rounded-md border-gray-300 px-2 py-1 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                                    />
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-sm font-medium text-gray-900">Description:</label>
                                                    <input
                                                        value={candidate.introduce}
                                                        onChange={(e) => handleInputChange(index, "introduce", e.target.value)}
                                                        type="text"
                                                        className="w-full rounded-md border-gray-300 px-2 py-1 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* <button type="button" onClick={addCandidate} className="mt-2 p-2 bg-green-500 text-white rounded">Thêm ứng viên</button> */}

                                </div>

                            ) : (
                                <div>
                                    <Result
                                        status="success"
                                        title="Congratulations! You have successfully created the vote!"
                                        subTitle="Address: 0x0e890800061A283Ca1359fA251824DA1f6581dDf"
                                        extra={[
                                            <Button type="primary" key="console" >
                                                <Link to={'/listVote'} >Success</Link>
                                            </Button>,
                                        ]}

                                    />
                                    <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded w-full">Tạo Bình Chọn</button>

                                </div>
                            )}
                        </form>
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
                        <Button type="primary" disabled={current < 3}>
                            Done
                        </Button>
                    )}
                </div>
            </div >

        </div >
    )
}
