import Link from 'next/link';
import React from 'react'
import { BiJoystick } from "react-icons/bi";

function BestProducts() {
  return (
    <div className='h-screen flex flex-col items-center justify-around' style={{backgroundImage:"url(./mostPopular.png)",backgroundSize:"cover"}}>
        <div className='text-white flex w-4/5 m-auto justify-between'>
            <h2 className='text-4xl font-bold w-1/4'>Best Pro Gaming Products</h2>
            <p className='w-1/2 text-sm text-gray-500'>More powerful hardware not only betters their experiences in games they&apos;re currently playing, but it also gives many players access to titles with more demanding specifications.</p>
            <Link href="/Product" className='flex items-center px-4 border w-40 h-10 border-gray-400 rounded-tr-2xl rounded-bl-2xl text-xs text-gray-500 hover:transition-all hover:duration-500 hover:bg-purple-800 hover:text-white hover:ease-in-out'>Show Products<BiJoystick className='ml-2' style={{fontSize:"18px"}}/></Link>
        </div>
        <div className='text-white w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
            <Link className='text-2xl font-bold mb-10' href="">KD DMTR....</Link>
            <p className='text-xs text-gray-400 mb-5'>Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.</p>
            <div className='flex justify-between items-center'>
                <span className='font-bold'>10000 NRP</span>
            </div>
        </div>
    </div>
  )
}

export default BestProducts