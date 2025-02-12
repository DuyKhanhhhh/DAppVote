import React from 'react'
import '../css/Hedaer.css'
import { FaUserCircle } from "react-icons/fa";
import ConnectButton from './ConnectButton';

export default function HeaderHome() {

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between' >
                <div className='w-10'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Logo_vote.svg/768px-Logo_vote.svg.png" alt="LogoVote" /></div>
                <div className='flex flex-row items-center'>
                    <div className='font-lora text-lg pr-6'>Home</div>
                    <div className='font-lora text-lg pr-6'>About</div>
                    <div className='font-lora text-lg pr-6'>Contact</div>
                    <div className='button-connect'>
                        <ConnectButton />
                    </div>
                    <div className='pl-6 text-2xl '><FaUserCircle /> </div>
                </div>
            </div>
        </div>

    )
}
