'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { RotatingLines } from 'react-loader-spinner';

function Admin() {
    const [loading,isLoading] = useState(false);
    const [productData,setProductData] = useState({
        name : "",
        type : "",
        description: "",
        price : "",
        image : ""
    })
    async function handleSubmit(event){
        event.preventDefault();
        isLoading(true);
        if(productData.name.length == 0 || productData.type.length == 0 || productData.description.length == 0 || productData.price.length == 0 || productData.image.length == 0 ){
            toast.error("Please provide all details!");
            isLoading(false);
        }

        try{
            const response = await axios.post('/api/product',productData);
            isLoading(false);
            toast.success("Product Added!");
        }catch(error){  
           toast.error(error.response.data.error);
           isLoading(false);
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
        <form className='flex flex-col border-2 w-4/5 m-auto mt-20 border-black p-20' method='post'>
            <legend className='mb-4 text-xl font-bold'>Product Info :</legend>
            <input className='border border-black mb-4 py-2 px-4 rounded-xl' type='text' placeholder='Name....' value={productData.name} onChange={(e)=>setProductData({...productData,name:e.target.value})} />
            <input className='border border-black mb-4 py-2 px-4 rounded-xl' type='text' placeholder='Type....' value={productData.type} onChange={(e)=>setProductData({...productData,type:e.target.value})} />
            <input className='border border-black mb-4 py-2 px-4 rounded-xl' type='text' placeholder='Description....' value={productData.description} onChange={(e)=>setProductData({...productData,description:e.target.value})} />
            <input className='border border-black mb-4 py-2 px-4 rounded-xl' type='text' placeholder='Price....' value={productData.price} onChange={(e)=>setProductData({...productData,price:e.target.value})} />
            <input className='border border-black mb-4 py-2 px-4 rounded-xl' type='text' placeholder='Image URL....' value={productData.image} onChange={(e)=>setProductData({...productData,image:e.target.value})} />
            <button className='border border-black mb-4 py-2 px-4 rounded-xl' onClick={(event)=>handleSubmit(event)}>{loading?  <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />  : <>Add product</>}</button>
        </form>

        <span className='text-xl font-bold mt-10'><Link href="/Product">Products</Link></span>
    </>
  )
}

export default Admin