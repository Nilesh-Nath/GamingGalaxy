"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useRouter} from "next/navigation";

function Checkout() {
    const params = new URLSearchParams(window.location.search);
    const priceParam = params.get('price');
    const [user,setUser] = useState();
    const taxPrice = 100;
    const deliveryCharge = 40;
    const totalPrice = parseFloat(priceParam) + taxPrice + deliveryCharge;
    const [info,setInfo] = useState({
        email : "",
        password : ""
    });
    const router = useRouter();

    async function getServerSideProps(){
        try{
            const response = await axios.get("/api/getServerSideProps");
            setUser(response.data.userData);
        }catch(error){
            console.log(error);
        }
    }

    function handleSubmit(){
        if(info.email === user.email){
            router.push("/success-page");
        }else{
            router.push("/failure-page");
        }
    }

    useEffect(()=>{
        getServerSideProps();
    },[])

  return (
    <div className='bg-gray-900'>
        <div className='w-4/5 m-auto flex flex-col py-28'>
            <h1 className='text-4xl font-bold mb-10 text-white text-center'>Payment</h1>
            <div className='flex rounded-xl'>
                <div className='flex flex-col w-1/2 rounded-xl px-10 py-16 text-white bg-gray-800'>
                    <h2 className='text-white font-bold mb-4'>Payment</h2>
                    <span className='text-xl'>Total Amount</span>
                    <span className='text-xl font-bold mb-4'><span className='text-green-600 font-bold text-xl'>NPR. </span>{totalPrice}</span>
                    <span className='px-4 py-1 bg-gray-900 text-gray-400 flex justify-between'>Product Amount  <span className='text-white'>{priceParam}</span></span>
                    <span className='px-4 py-1  text-gray-400 flex justify-between'>Tax Amount  <span className='text-white'>{taxPrice}</span></span>
                    <span className='px-4 py-1 bg-gray-900 text-gray-400 flex justify-between'>Delivery Charge <span className='text-white'>{deliveryCharge}</span></span>
                    <span className='px-4 py-1  text-gray-400 flex justify-between'>Total Amount <span className='text-white'>{totalPrice}</span>
                    </span>
                </div>
                <div className='flex flex-col w-1/2 rounded-xl px-10 py-16'>
                    <input className='border w-72 h-10 rounded-xl px-4 bg-transparent text-sm mb-4 text-white' placeholder='Email' type='text' value={info.email} onChange={(e)=>{setInfo({...info,email:e.target.value})}} />
                    <input className='border w-72 h-10 rounded-xl px-4 bg-transparent text-sm mb-4 text-white' placeholder='Password' type='password' value={info.password} onChange={(e)=>{setInfo({...info,password:e.target.value})}} />
                    <select className='border w-72 h-10 rounded-xl px-4 bg-transparent text-sm text-white mb-4'>
                        <option className='bg-transparent text-black'>E-Sewa</option>
                        <option className='text-black'>Khalti</option>
                    </select>
                    <input onClick={handleSubmit} className='border w-40 h-10 rounded-xl px-4 cursor-pointer text-white' type='submit' value="Submit" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Checkout;
