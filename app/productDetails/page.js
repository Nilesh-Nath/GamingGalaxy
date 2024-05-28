'use client'
import React, { useEffect, useState } from 'react'
import SizeTable from '../components/sizeTable/SizeTable'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import { FaScissors } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function ProductDetail({searchParams}) {
    const [isTableClick,setTableClick] = useState(false);
    const [clicked,setClicked] = useState(false);
    const data = JSON.parse(searchParams.data);
    const [product,setProduct] = useState([]);

    function handleTable(){
        setTableClick(!isTableClick)
    }

    const addToWishList = async ()=>{
        try{
            const response = await axios.post("/api/wishList",data);
            toast.success(response.data.message);
        }catch(error){
            console.log(error.response.data.error);
            toast.error(error.response.data.error);
        }
    }

    async function call(){
        if(!clicked){
            await addToWishList()
        }
    }

    async function removeFromwishList(){
        try{
            const item = data;
            const response = await axios.delete(`/api/deleteWishlistItem?item=${encodeURIComponent(JSON.stringify(item))}`);
            toast.success(response.data.message);
        }catch(error){
            console.log(error);
            toast.error(error.response.data.error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        try{
            const response = await axios.get("api/wishList");
            setProduct(response.data.data);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        if(product.length > 0){
            product.map((item)=>{
                if(item.name === data.name){
                    setClicked(true);
            }})
        }
    },[product])

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
        <div className='bg-black text-white'>
            <div className='w-4/5 m-auto flex py-24 justify-between items-center'>
                <div className='w-1/2'>
                    <div className='w-1/2 flex items-center mb-5 mt-20 '>
                        <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer' style={{fontSize:"40px"}} />
                        <Link href="/" className='text-gray-400 font-semibold text-xs'>Back to shop</Link>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-sm bg-purple-600/40 rounded-md px-2 py-1 font-bold text-white mr-4 cursor-pointer'>{data.type}</span>
                        <span onClick={()=>{
                            setClicked(!clicked);
                            if(clicked){
                                removeFromwishList(data)
                                setClicked(false);
                            }else{
                                call()
                                setClicked(true);
                            }
                        }} 
                        className='flex items-center text-sm text-gray-400 cursor-pointer'><FaRegHeart className={`mr-2 cursor-pointer ${clicked ? "text-pink-600" : "text-gray-400"}`} /> {clicked ? <>Favorite</> : <>Add to wishlist</>}</span>
                    </div>
                    <div className='flex items-center mt-4'>
                        <div className='flex items-center mr-4'>
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                        </div>
                        <span className='flex items-center text-sm text-gray-400'><FaPen className='mr-2' /> Write a review</span>
                    </div>
                    <h1 className='text-4xl font-bold mt-8'>{data.name}</h1>
                    <div className='flex text-xs text-gray-400 mt-4'>
                        <span className='mr-4'>TYPE: {data.type}</span>
                        <span className='mr-4'>SKU: {data._id}</span>
                        <span className='flex items-center' onClick={handleTable}><span><FaScissors className='mr-2' /></span>See Sizing Guide</span>
                    </div>
                    <p className='mt-7 text-sm text-gray-400 mb-7'>
                    {data.description}    
                    </p>
                    <span className=' text-xl font-bold'>{data.price}<span className='text-xs ml-2'>NRS</span></span>
                    <div className='flex mt-5 w-fit'>
                        <button className='flex items-center py-2 px-4 mr-8 bg-purple-500 rounded-tl-xl rounded-br-xl text-white fpmt-bold text-xs border border-purple-800 hover:bg-transparent hover:border hover:border-white hover:text-gray-400 font-bold'>ADD TO CART</button>
                        <button className='flex items-center py-2 px-4 bg-purple-500 rounded-tl-xl rounded-br-xl text-white fpmt-bold text-xs border border-purple-800 hover:bg-transparent hover:border hover:border-white hover:text-gray-400 font-bold'>BUY IT NOW</button>
                    </div>
                </div>
                <div className='border-2 border-purple-600 rounded-tl-2xl w-96 h-96 rounded-br-2xl pt-10'>
                    <img src={data.image} alt="Product" style={{width:"300px",margin:"auto"}} />
                </div>
            </div>
        </div>
        <div className='flex w-4/5 m-auto justify-between py-24'>
            <div className='w-1/2 mr-10'>
                <h4 className='text-2xl font-bold'>Description:</h4>
                <p className='mt-7 text-sm text-gray-400 mb-7'>{data.description}</p>
            </div>
            <img src="./descriptionBanner.webp" alt="Banner" />
        </div>

    </>
  )
}

export default ProductDetail