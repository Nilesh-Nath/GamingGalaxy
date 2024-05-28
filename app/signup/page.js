'use client'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

function Signup() {
    const router = useRouter();

    const [user,setUser] = useState({
       firstname:"",
       lastname:"",
       email:"",
       password:"" 
    })

    const [loading,setLoading] = useState(false) 

    const onSignup = async (event)=>{
        setLoading(true);
        event.preventDefault();
        if(user.firstname.length == 0 || user.lastname.length == 0 || user.email.length == 0 || user.password.length == 0){
            toast.error("Please fill the Credentials!");
            setLoading(false);
        }
        try{
            const response = await axios.post("/api/users/signup",user);
            console.log(`Signup Success! ${response.data}`);
            setLoading(false);
            router.push("/login"); 
        }catch(error){
            console.log("SignUp failed!!",error);
            toast.error(error.response.data.error);
            setLoading(false);
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
        <div className='flex flex-col justify-center items-center h-screen my-10'>
            <div className='flex items-center mb-5'>
                <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer' style={{fontSize:"40px"}} />
                <span className='text-gray-400 font-semibold text-xs'>Back to shop</span>
            </div>
            <h2 className='text-4xl font-semibold mb-16'>Register</h2>
            <form className='flex flex-col border w-1/2'>
                <h3 className='px-4 py-4 text-gray-400'>Your Personal Details</h3>
                <div className='flex flex-col border-t px-4 py-4'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col w-1/2 mr-4'>
                        <label htmlFor="firstname" className='text-gray-400 text-sm mb-4'>First name: <span className='text-red-500'>*</span></label>
                        <input type="text" id="firstname" name="firstname" value={user.firstname} onChange={(e)=>setUser({...user,firstname:e.target.value})} placeholder='First name' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="firstname" className='text-gray-400 text-sm mb-4'>Last name: <span className='text-red-500'>*</span></label>
                        <input type="text" id="lastname" name="lastname" value={user.lastname} onChange={(e)=>setUser({...user,lastname:e.target.value})} placeholder='Last name' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                        <label htmlFor="email" className='text-gray-400 text-sm mb-4'>Email: <span className='text-red-500'>*</span></label>
                        <input type="text" id="email" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Email' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                  </div>
                </div>
                <div className='flex flex-col border-t py-4 border-b'>
                    <h3 className='px-4 text-gray-400 mb-4'>Your Password</h3>
                    <div className='flex flex-col border-t px-4'>
                        <label htmlFor="password" className='text-gray-400 text-sm mb-4 mt-4'>Password: <span className='text-red-500'>*</span></label>
                        <input type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Password' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                    </div>
                </div>
                <div className='flex items-center w-full justify-end mt-4'>
                    <button onClick={(event) => onSignup(event)} className='flex items-center border px-10 py-4 mr-10 mb-4 w-60 font-bold bg-black text-white rounded-tr-xl rounded-bl-xl text-sm'>{loading ?<RotatingLines visible={true} height="34" width="34" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> :(<><span>Send Message</span><IoArrowForwardSharp className='ml-4' /></>)}</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Signup

