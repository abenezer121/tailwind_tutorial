import React from 'react'

import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from "@heroicons/react/outline";
import bgImg from '../assets/asd.png';

const Hero = () => {
    return (
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className='grid md:grid-cols-2 mx-2=[1240px] m-auto'>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">Unique Sequencing and Production</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-2xl'> This is our Tech brand.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                        <img className ='w-full' src={bgImg} alt=""/>
                </div>
                {/* anything above medium md:min-w-[760px] bottom-[-5%] */}
                <div className='
                absolute flex flex-col py-6
                 md:min-w-[760px] bottom-[5%] 
                 mx-1 md:left-1/2 transform  md:-translate-x-1/2
                  bg-zinc-200 border border-slate-300
                  rounded-xl  text-center shadow-xl'>
                    <p>Data Services</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2'><CloudUploadIcon className='h-6'/> App Security</p> 
                        <p className='flex px-4 py-2'><DatabaseIcon className='h-6'/> DashBoard Design</p>
                        <p className='flex px-4 py-2'><ServerIcon className='h-6'/> Cloud Data </p>
                        <p className='flex px-4 py-2'><PaperAirplaneIcon className='h-6'/> API</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;