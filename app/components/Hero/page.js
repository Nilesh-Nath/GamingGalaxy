'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiJoystick } from "react-icons/bi";
import { RotatingLines } from 'react-loader-spinner';

function Hero() {
    const [loading,setLoading] = useState(false);
    const [loadingForProduct,setLoadingForProduct] = useState(false);
    function rotateSpinner(){
        setLoading(true);
    }
    function rotateSpinnerForProducts(){
        setLoadingForProduct(true);
    }

  return (
    <div className='relative -top-10 z-0'>
        <div className='h-screen flex flex-col text-white justify-center' style={{backgroundImage: "url(/Hero.png)", backgroundSize: "cover"}}>
            <div className='w-4/5 m-auto px-16'>
                <div className='py-3 px-5 bg-blue-900/50 rounded-3xl w-fit text-sm mt-28'>
                    <span className='py-1 bg-purple-700 text-white rounded-2xl px-2 text-center mr-2'>Featured </span>   
                    <span>New featured collection <Link href="/collections" className='text-purple-500 cursor-pointer'>\ Gaming. Collector</Link></span>
                </div>
                <div>
                    <h1 className='text-5xl font-bold w-1/2 mt-10'>Best <span className='text-purple-500'>Pro Gaming</span> Accessories</h1>
                </div>
                
                <p className='text-xs text-gray-400 w-2/5 mt-4'>Gaming accessories include gear such as headsets, extra controllers, charging stations, memory devices, carrying cases and much more.</p>
                
                <div className='flex mt-5'>
                    <Link onClick={rotateSpinnerForProducts} href="/Product" className='flex items-center py-3 px-4 bg-purple-800 rounded-tr-2xl rounded-bl-2xl border border-purple-800 mr-4 text-xs hover:bg-transparent hover:border hover:border-purple-800'>{loadingForProduct? <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> :<>Show Products<BiJoystick className='ml-2' style={{fontSize:"18px"}}/></>}</Link>
                    <Link onClick={rotateSpinner} href="/collections" className='flex items-center py-3 px-4 border border-purple-800 rounded-tr-2xl rounded-bl-2xl text-xs hover:bg-purple-800'>{loading ? <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> : <>Show Collections<BiJoystick className='ml-2' style={{fontSize:"18px"}} /></>}</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
