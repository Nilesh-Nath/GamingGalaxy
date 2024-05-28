'use client'
import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
// How to setup a page with custom fields?
// By creating an account you will be able to shop faster, be up to date on an order's status, 
// and keep track of the orders you have previously made.By creating an account you will be able
// to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.

function DropDown() {
    const [isClicked , setClick] = useState(false);
    const handleClick = ()=>{
        setClick(!isClicked)
    }
  return (
    <div className='mb-10'>
        <div className='w-80 border-2 text-xs font-bold flex items-center justify-between text-gray-500 p-4 cursor-pointer' onClick={handleClick}>
            <p>How to setup a page with custom fields?</p>
            <IoIosArrowDropdown style={{fontSize:"20px"}} />
        </div>
        {
            isClicked ? (
                <div className='w-80 border-2 border-t-0 p-4'>
                    <p className='text-xs font-bold text-gray-500'>By creating an account you will be able to shop faster, be up to date on an order&apos;s status, 
                    and keep track of the orders you have previously made.By creating an account you will be able
                    to shop faster, be up to date on an order&spos;s status, and keep track of the orders you have previously made.</p>
                </div>
            ) : (<></>)
        }
    </div>
  )
}

export default DropDown