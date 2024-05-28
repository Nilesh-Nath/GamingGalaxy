'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';

function Card({productInfo}) {

    const [loading,setLoading] = useState(false);
    const [user,setUser] = useState({
        id : "",
        email : "",
        name : ""
    });
    
    useEffect(()=>{
        getServerSideProps()
    },[])

    async function getServerSideProps(){
        try{
            const response = await axios.get("/api/getServerSideProps");
            setUser(response.data.userData);
        }catch(error){
            console.log(error.response.data.error);
        }
    }

    if (!productInfo) {
        return null; 
    }

    async function addToCart(){
        setLoading(true);
        try{
            console.log(productInfo);
            const response = await axios.post("api/addToCart",productInfo);
            console.log(response.data.message);
            setLoading(false);
        }catch(error){
            console.log(error.response.data.error);
            setLoading(false);
        }
    }

    return (
    <div className='p-4 bg-transparent border border-purple-500 text-white w-72 rounded-tr-2xl rounded-bl-2xl'>
        <Link href={{pathname:"/productDetails",query:{data:JSON.stringify(productInfo)}}}>
            <h2 className='text-2xl font-bold'>{productInfo.name}</h2>
            <span className='text-sm text-gray-400'>Type : {productInfo.type}</span>
            <img className='w-11/12' src={productInfo.image} alt={productInfo.name} />
        </Link>
        <div className='flex justify-between items-center'>
            <span className='font-bold text-black'>{productInfo.price} NRP</span>
            {
                user.id ? (
                    <button onClick={addToCart} className='py-2 px-4 bg-purple-800 border border-purple-800 rounded-tr-2xl rounded-bl-2xl hover:bg-transparent hover:text-purple-800'>{loading? <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> :<>Add to Cart</>}</button>
                    ) : (
                    <Link href="/login" className='py-2 px-4 bg-purple-800 border border-purple-800 rounded-tr-2xl rounded-bl-2xl hover:bg-transparent hover:text-purple-800'>{loading? <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> :<>Add to Cart</>}</Link>
                )
            }
        </div>
    </div>
  )
}

export default Card