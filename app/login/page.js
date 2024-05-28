'use client'
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const router =  useRouter();
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const onLogin = async (event) =>{
    setLoading(true);
    event.preventDefault();
    if(user.email.length == 0 || user.password.length == 0){
      toast.error("Please fill in the credentials!");
      setLoading(false);
    }
    try{
      const response = await axios.post("/api/users/login",user)
      console.log(`Login Success! ${response.data}`)
      setLoading(false);
      toast.success("Login Success,Please wait....")
      router.push("/");
    }catch(error){
      setLoading(false);
      toast.error(error.response.data.error);
    }
  }

  const registerNav = (event)=>{
    event.preventDefault();
    router.push("/signup")
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
    <div className='flex flex-col justify-center items-center h-screen my-5'>
        <div className='flex items-center mb-5'>
            <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer' style={{fontSize:"40px"}} />
            <span className='text-gray-400 font-semibold text-xs'>Back to shop</span>
        </div>
        <h2 className='text-4xl font-semibold mb-16'>Log In</h2>
        <form className='flex flex-col border w-1/2'>
            <h3 className='px-4 py-4 text-gray-400'>Your Personal Details</h3>
            <div className='flex flex-col border-t px-4 py-4'>
              <span className='text-sm font-md text-gray-400 mb-4'>I am a returning Customer</span>
              <div className='flex justify-between'>
                <div className='flex flex-col w-1/2 mr-4'>
                    <label htmlFor="email" className='text-gray-400 text-sm mb-4'>Email: <span className='text-red-500'>*</span></label>
                    <input type="text" id="email" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Email' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                </div>
                <div className='flex flex-col w-1/2'>
                    <label htmlFor="password" className='text-gray-400 text-sm mb-4'>Password: <span className='text-red-500'>*</span></label>
                    <input type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Password' className='border outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl mb-5 text-xs'/>
                </div> 
              </div>
            </div>
            <div className='flex items-center border-t py-4 border-b justify-end'>
                <span className='text-sm text-red-500 underline cursor-pointer mr-4'>Forget Password?</span>
                <button onClick={(event)=>onLogin(event)} className='flex items-center border px-10 py-4 mr-10 w-40 font-bold bg-black text-white rounded-tr-xl rounded-bl-xl text-sm'>{loading? <RotatingLines visible={true} height="28" width="28" color="grey" strokeWidth="5" animationDuration="0.75" ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" /> :<> LogIn<IoArrowForwardSharp className='ml-4' /></>}</button>
            </div>
            <div className='flex items-center border-t py-4 border-b justify-center'>
                <span className='text-sm text-gray-400 mr-4 ml-2'>If you don&apos;t have account</span>
                <button onClick={(event) => registerNav(event)} className='flex items-center border px-10 py-4 mr-10 w-55 font-bold bg-black text-white rounded-tr-xl rounded-bl-xl text-sm'>Register<IoArrowForwardSharp className='ml-4' /></button>
            </div>
        </form>
    </div>
</>
  )
}




export default Login