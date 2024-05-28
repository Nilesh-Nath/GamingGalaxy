import Link from 'next/link';
import React from 'react'
import { BiJoystick } from "react-icons/bi";

function BestProducts1() {
  return (
    <div className='h-screen flex flex-col items-center justify-around' style={{backgroundImage:"url(./mostPopular1.png)",backgroundSize:"cover"}}>
        <div className='text-black w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
            <Link className='text-2xl font-bold mb-10' href="">Cloud Alpha....</Link>
            <p className='text-xs text-gray-400 mb-5'>HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.</p>
            <div className='flex justify-between items-center'>
                <span className='font-bold'>5300 NRP</span>
            </div>
        </div>
    </div>
  )
}

export default BestProducts1