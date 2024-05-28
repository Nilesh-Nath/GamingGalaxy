'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Card from '../components/Card/Card';

function Product() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        try{
            const response = await axios.get('/api/product');
            setProducts(response.data.products);
        }catch(error){
            toast.error(error.response.data.error);
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
        <div className='bg-black'>
            <div className='w-4/5 m-auto text-white py-10'>
                <h1 className='text-2xl font-bold mb-10'>Products</h1>
                <ul className='flex flex-wrap justify-around'>
                    {products.map((product,index) => (
                        <Card key={index} productInfo={product} />
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}

export default Product