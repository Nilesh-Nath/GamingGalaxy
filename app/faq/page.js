import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import DropDown from '../components/DropDown/DropDown';

function FAQ() {
  return (
    <>
    <div className='bg-black'>
        <div className='w-4/5 m-auto py-16'>
            <div className='w-1/2 flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                <span className='text-white font-semibold text-xs'>Back to shop</span>
            </div>
            <h1 className='text-4xl text-purple-600 font-bold mb-5'>Featured asked questions</h1>
            <p className='text-xs font-medium text-white w-1/2'>People will always seek help and advice. They are unwilling to pick up the phone, walk into a store, or wait hours (even minutes) for that information or insight to become accessible.</p>
        </div>
    </div>
    <div className='w-4/5 m-auto'>
        <div className='py-16'>
            <h2 className='text-4xl font-bold'>About <span className='text-purple-500'>Shop</span></h2>
            <div className='mt-10 flex flex-wrap justify-evenly'>
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
                <DropDown />
            </div>
        </div>
        
    </div>
</>
  )
}

export default FAQ