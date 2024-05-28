"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

function WishList() {

    const [loading,isLoading] = useState(false);
    const [wishlistItems,setWishList] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        try{
            const response = await axios.get("/api/wishList");
            console.log(response.data.data);
            setWishList(response.data.data);
            isLoading(false);
        }catch(error){
            console.log(error.response.data.error);
        }
    }

    const deleteAll = async ()=>{
        try{
            const response = await axios.delete("/api/wishList");
            toast.success(response.data.message)
        }catch(error){
            console.log(error);
            toast.error(error.response.data.error)
        }
    }
    
    async function deleteSpecificItem(item){
        try {
            const response = await axios.delete(`/api/deleteWishlistItem?item=${encodeURIComponent(JSON.stringify(item))}`);
            toast.success(response.data.message)
            console.log(response.data); // Log response data if needed
        } catch(error) {
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
    }
    
    return (
        <>
        <Toaster
                position="top-left"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                // Default options for specific types
                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },            
            }}
            />
    <div>
       <div className='bg-black'>
            <div className='w-4/5 m-auto py-16 '>
                <div className='w-1/2 flex items-center mb-5'>
                    <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                    <Link href="/" className='text-white font-semibold text-xs'>Back to shop</Link>
                </div>
                <h1 className='text-4xl text-purple-600 font-bold mb-5'>Wishlist</h1>
                <p className='text-xs font-medium text-white w-1/2'>Welcome to our Wishlist feature, where you can curate your personalized collection of desired items and experiences.</p>
            </div>
       </div>
        <div className='w-4/5 m-auto py-20 flex flex-col items-center'>
            <h2 className='text-3xl font-bold text-center mb-10'>Wishlist({wishlistItems.length})</h2>
           {
            loading ? (
                <>Loading....</>
            ) : (
                <table className='w-full text-center text-xs text-gray-500 font-bold mb-20'>
                    <thead>
                        <tr  className='border-b-2 border-gray-200'>
                            <th className='text-gray-400 font-bold text-sm'>Product</th>
                            <th className='text-gray-400 font-bold text-sm'>Details</th>
                            <th className='text-gray-400 font-bold text-sm'>Cart Button</th>
                            <th className='text-gray-400 font-bold text-sm'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {wishlistItems.map((item, index) => (
                                <tr className='h-40' key={index} >
                                    <td className='w-28'><img src={item.productId.image} alt='Item' /></td>
                                    <td className='flex flex-col h-40 justify-center'>
                                        <span className='my-2'>{item.name}</span>
                                        <span className='mb-2'>{item.type}</span>
                                        <span>{item.price} NPR</span>
                                    </td>
                                    <td className='h-40'>
                                        <button className='py-3 px-4 text-white font-bold bg-purple-800 rounded-tr-2xl rounded-bl-2xl text-sm hover:bg-transparent border border-purple-800 hover:text-purple-800 hover:border-purple-800'>Add to cart</button>
                                    </td>
                                    <td className='flex items-center justify-center m-auto h-40'>
                                        <span onClick={()=>deleteSpecificItem(item)} ><AiFillDelete className='cursor-pointer hover:text-red-500' size={28} /></span>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )
           }
            <button onClick={deleteAll} className='flex items-center py-3 px-4 border border-purple-800 text-white w-24 font-bold bg-purple-800 rounded-tr-2xl rounded-bl-2xl mr-4 text-sm hover:border hover:border-red-500 hover:bg-red-500 hover:text-white '>Clear All</button>
        </div>
    </div>
    </>
  )
}

export default WishList