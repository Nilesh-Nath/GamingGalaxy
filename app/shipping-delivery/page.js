import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

function ShippingDelivery() {
  return (
    <>
    <div className='bg-black'>
        <div className='w-4/5 m-auto py-16'>
            <div className='w-1/2 flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                <span className='text-white font-semibold text-xs'>Back to shop</span>
            </div>
            <h1 className='text-4xl text-purple-600 font-bold mb-5'>Shipping & Delivery</h1>
            <p className='text-xs font-medium text-white w-1/2'>We value the diverse perspectives and experiences of our users, and we encourage collaboration and community engagement. Our platform provides opportunities for users to contribute their knowledge, share their opinions, and engage in discussions with like-minded individuals.</p>
        </div>
    </div>
    <div className='w-4/5 m-auto'>
        <div className='py-16'>
            <h2 className='text-4xl font-bold mb-5'>Shipping & Delivery</h2>
            <p className='text-sm mr-5 text-gray-500 mb-4'>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are hazardous materials, or flammable liquids or gases.Additional non-returnable items:</p>
            <ul className='text-sm text-gray-500 mb-5 list-disc'>
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Some health and personal care items</li>
                <li>To complete your return, we require a receipt or proof of purchase.</li>
                <li>Please do not send your purchase back to the manufacturer.</li>
                <li>There are certain situations where only partial refunds are granted (if applicable)</li>
                <li>Book with obvious signs of use</li>
                <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened</li>
                <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
                <li>Any item that is returned more than 30 days after delivery</li>
            </ul>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>Refunds (if applicable)</h4>
                <p className='text-sm mr-5 text-gray-500'>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
                <ul className='text-sm text-gray-500 mb-5 list-disc'>
                    <li>Late or missing refunds (if applicable)</li>
                    <li>If you haven’t received a refund yet, first check your bank account again.</li>
                    <li>Then contact your credit card company, it may take some time before your refund is officially posted.</li>
                    <li>Next contact your bank. There is often some processing time before a refund is posted.</li>
                    <li>If you’ve done all of this and you still have not received your refund yet, please contact us at themesupport@shopify.com.</li>
                    <li>Sale items (if applicable)</li>
                    <li>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</li>
                </ul>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>Exchanges (if applicable)</h4>
                <p className='text-sm mr-5 text-gray-500'>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at themesupport@shopify.com and send your item to: 150 Elgin Street, Ottawa ON K2P1L4, Canada.</p>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>Gifts</h4>
                <p className='text-sm mr-5 text-gray-500'>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
                If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
            </div>
            <div className='w-full justify-between mt-4 '>
                <h4 className='text-xl font-bold mb-4'>Shipping</h4>
                <p className='text-sm mr-5 text-gray-500'>To return your product, you should mail your product to: 150 Elgin Street, Ottawa ON K2P1L4, Canada
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
            </div>
        </div>
        
    </div>
</>
  )
}

export default ShippingDelivery