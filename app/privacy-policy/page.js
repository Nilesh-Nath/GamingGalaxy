import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

function PrivacyPolicy() {
  return (
    <>
    <div className='bg-black'>
        <div className='w-4/5 m-auto py-16'>
            <div className='w-1/2 flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                <span className='text-white font-semibold text-xs'>Back to shop</span>
            </div>
            <h1 className='text-4xl text-purple-600 font-bold mb-5'>Privacy Policy</h1>
            <p className='text-xs font-medium text-white w-1/2'>We value the diverse perspectives and experiences of our users, and we encourage collaboration and community engagement. Our platform provides opportunities for users to contribute their knowledge, share their opinions, and engage in discussions with like-minded individuals.</p>
        </div>
    </div>
    <div className='w-4/5 m-auto'>
        <div className='py-16'>
            <h2 className='text-4xl font-bold mb-4'>Privacy Policy</h2>
            <p className='text-xs font-bold text-gray-500 mb-4'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information”.</p>
            <p className='text-xs text-gray-500'>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information”.When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-2xl font-bold text-gray-500 mb-4'>How do we use your personal information?</h4>
                <p className='text-sm mr-5 text-gray-500 mb-5'>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
                <ul className='text-sm text-gray-500 mb-5 list-disc'>
                    <li>Communicate with you.</li>
                    <li>Screen our orders for potential risk or fraud.</li>
                    <li>When in line with the preferences you have shared with us.</li>
                    <li>provide you with information or advertising relating to our products or services.</li>
                </ul>
                <p className='text-sm mr-5 text-gray-500'>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
            </div>
           
        </div>
        
        
    </div>
</>
  )
}

export default PrivacyPolicy