import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

function TermsConditions() {
  return (
    <>
    <div className='bg-black'>
        <div className='w-4/5 m-auto py-16'>
            <div className='w-1/2 flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                <span className='text-white font-semibold text-xs'>Back to shop</span>
            </div>
            <h1 className='text-4xl text-purple-600 font-bold mb-5'>Terms & Conditions</h1>
            <p className='text-xs font-medium text-white w-1/2'>We value the diverse perspectives and experiences of our users, and we encourage collaboration and community engagement. Our platform provides opportunities for users to contribute their knowledge, share their opinions, and engage in discussions with like-minded individuals.</p>
        </div>
    </div>
    <div className='w-4/5 m-auto'>
        <div className='py-16'>
            <h2 className='text-4xl font-bold'>Terms & Conditions</h2>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>1. General Condition</h4>
                <p className='text-sm mr-5 text-gray-500'>We reserve the right to refuse service to anyone for any reason at any time.
                You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
                The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>2. Accuracy, Completeness & Timeliness of Information</h4>
                <p className='text-sm mr-5 text-gray-500'>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
                This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>3. Modifications to the Service & Prices</h4>
                <p className='text-sm mr-5 text-gray-500'>Prices for our products are subject to change without notice.
                We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>4. Products or Services (if applicable)</h4>
                <p className='text-sm mr-5 text-gray-500'>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.
                We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
            </div>
        </div>
        
        
    </div>
</>
  )
}

export default TermsConditions