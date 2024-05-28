import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../components/Map/Map'), {
  ssr: false,
});


function ContactPage() {
  return (
    <>
    <div className='bg-black'>
        <div className='w-4/5 m-auto py-16'>
            <div className='w-1/2 flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                <span className='text-white font-semibold text-xs'>Back to shop</span>
            </div>
            <h1 className='text-4xl text-purple-600 font-bold mb-5'>Contact with us</h1>
            <p className='text-xs font-medium text-white w-1/2'>With that in mind, we strive to deliver accurate, trustworthy, and engaging content to our users. Our team of experts, researchers, and writers work tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more.</p>
        </div>
    </div>
    <div className='w-4/5 m-auto py-20 flex justify-between'>
        <div className='w-2/5 justify-between text-sm text-gray-400 font-bold flex'>
            <div>
                <div className='flex flex-col mb-4'>
                    <span>CALL US</span>
                    <span>+48 0021-32-12</span>
                </div>
                <div className='flex flex-col'>
                    <span>EMAIL:</span>
                    <span>shop@company.com</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <span>ADDRESS:</span>
                <span>1093 Marigold Lane,</span>
                <span>Coral Way, Miami,</span>
                <span>Florida, 33169</span>
            </div>
            
        </div>
        <form className='flex flex-col border w-1/2'>
                <h3 className='px-4 py-4 text-gray-400'>Contact form</h3>
                <div className='flex flex-col border-t px-4 py-4'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col w-1/2 mr-4'>
                        <label for="fname" className='text-gray-400 text-sm mb-4'>First name: <span className='text-red-500'>*</span></label>
                        <input type="text" id="fname" name="fname" placeholder='First name' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label for="fname" className='text-gray-400 text-sm mb-4'>Last name: <span className='text-red-500'>*</span></label>
                        <input type="text" id="lname" name="lname" placeholder='Last name' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex flex-col w-1/2 mr-4'>
                        <label for="emailPhone_number" className='text-gray-400 text-sm mb-4'>Email: <span className='text-red-500'>*</span></label>
                        <input type="text" id="email" name="email" placeholder='Email' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label for="Phone_number" className='text-gray-400 text-sm mb-4'>Phone Number: <span className='text-red-500'>*</span></label>
                        <input type="text" id="Phone_number" name="Phone_number" placeholder='Phone Number' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                  </div>
                 
                </div>
                <div className='flex flex-col border-t py-4 border-b'>
                    <h3 className='px-4 text-gray-400 mb-4'>Your Message</h3>
                    <div className='flex flex-col border-t px-4'>
                        <label for="Message" className='text-gray-400 text-sm mb-4 mt-4'>Message: <span className='text-red-500'>*</span></label>
                        <input type="text" id="Message" name="Message" placeholder='How can we help you ?' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                </div>
                <div className='flex items-center w-full justify-end mt-4'>
                    <button className='flex items-center border px-10 py-4 mr-10 mb-4 w-60 font-bold bg-purple-600 text-white rounded-tr-xl rounded-bl-xl text-sm'>Send Message<IoArrowForwardSharp className='ml-4' /></button>
                </div>
        </form>
    </div>
    <MapComponent />
    </>
  )
}

export default ContactPage