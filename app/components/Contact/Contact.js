'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';

function Contact() {
  const [loading,setLoading] = useState(false);
  function rotateSpinner(){
    setLoading(true);
}
  return (
    <div className='flex items-center w-4/5 m-auto pb-28 flex-wrap'>
        <div className='w-2/5 mr-28'>
            <span className='text-sm bg-purple-600/40 rounded-md px-2 py-1 font-bold text-white'>Contact Us</span>
            <h2 className='text-4xl font-bold mt-4'>For any queries and Issues Contact our <span className='text-purple-500'>customer Service staff</span></h2>
            <p className='text-xs text-gray-500 mt-4'>Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving gaming experiences.</p>
            <Link href='/contact' className='flex items-center py-3 px-4 border border-purple-800 rounded-tr-2xl rounded-bl-2xl mr-4 text-xs mt-10 font-bold w-fit hover:bg-purple-800 hover:text-white hover:duration-500 hover:ease-in-out hover:transition-all'>{loading?<RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />:<>Contact Us</>}</Link>
        </div>
        <div>
            <img src="./subscribe-img.webp" />
        </div>
    </div>
  )
}

export default Contact