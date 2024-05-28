import React from 'react'
import { CiYoutube } from "react-icons/ci";
import { PiMessengerLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className='bg-black pt-10'>
      <div className='flex items-center py-8 bg-black text-white text-sm'>
        <div className='flex w-4/5 m-auto'>
          <div className="w-3/12 mr-20">
            <h2 className='text-3xl font-bold'>Gaming<span className='text-purple-800'>Galaxy.</span></h2>
            <h4 className='text-xl font-bold leading-none mt-8'>Reach out & let your <span className='text-purple-800'>mind explore</span></h4>
            <p className='mt-4 text-xs'>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
          </div>
          <div className="w-3/12">
            <span className='font-bold'>NAVIGATION:</span>
            <ul className='mt-4'>
              <Link href="/Search"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Search</li></Link>
              <Link href="/collections"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>All Collections</li></Link>
              <Link href="/Product"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>All Products</li></Link>
              <Link href=""><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Article Page</li></Link>
              <Link href=""><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Blog Page</li></Link>
            </ul>
          </div>
          <div className="w-3/12">
            <span className='mt-4'>ABOUT US:</span>
            <ul className='mt-4'>
              <Link href="/faq"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>About Us</li></Link>
              <Link href="/contact"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Contact with us</li></Link>
              <Link href="/faq"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>FAQ&apos;s</li></Link>
              <Link href="/privacy-policy"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Privacy Policy</li></Link>
              <Link href="/shipping-delivery"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Shipping & Delivery</li></Link>
              <Link href="terms-conditions"><li className='mt-2 cursor-pointer hover:underline hover:text-purple-800 transition-all duration-500 ease-in-out'>Terms & Conditions</li></Link>
            </ul>
          </div>
          <div className="w-3/12">
            <span className='mt-4'>SHARE:</span>
            <div className='flex mt-4 items-center w-1/2 justify-between'>
              <CiYoutube className='cursor-pointer hover:text-purple-800' style={{fontSize:"24px"}}/>
              <PiMessengerLogoLight className='cursor-pointer hover:text-purple-800' style={{fontSize:"24px"}}/>
              <FaInstagram className='cursor-pointer hover:text-purple-800' style={{fontSize:"22px"}}/>
              <FaXTwitter className='cursor-pointer hover:text-purple-800' style={{fontSize:"22px"}}/>
            </div>
          </div>
        </div>
      </div>
      <p className='text-xs font-bold text-white w-4/5 m-auto py-8'>© 2024, GamingGalaxy, All rights reserved.</p>
    </div>
  )
}

export default Footer