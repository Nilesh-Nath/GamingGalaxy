"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import { Oval } from 'react-loader-spinner';
import axios from 'axios';

function Success() {
    const router = useRouter();
    setTimeout(executeAfterDelay,10000);
    function executeAfterDelay(){
        router.replace("/");
    }

    useEffect(()=>{
        removeCart();
    },[])

    async function removeCart(){
        try{
            const response = await axios.delete("/api/cartDelete");
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className='flex w-4/5 m-auto items-center'>
        <div className='w-1/2 px-8 py-16'>
            <h1 className='text-4xl text-green-800 mb-4'>Success!</h1>
            <span className='text-2xl mb-2'>Successfully completed the transaction! Redirecting to home page!</span>
            <span className='text-2xl mb-2'>Thank you for using our services!</span>
        </div>
        <div>
            <span>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            </span>
        </div>
    </div>
  )
}

export default Success