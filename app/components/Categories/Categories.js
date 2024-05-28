// category.js

'use client'
import React, { useEffect, useState } from 'react'
import { BiJoystick } from "react-icons/bi";
import { CiSpeaker } from "react-icons/ci";
import { GiPowerGenerator } from "react-icons/gi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './CategoriesCart';
import axios from 'axios';
import Link from 'next/link';

function Categories() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Console');

    useEffect(() => {
        if(category){
            getData(category);
        }
    }, [category]);

    async function getData(type) {
        try {;

            const response = await axios.get(`/api/category?type=${type}`);
            setProducts(response.data.products);
        } catch (error) {
            console.error(error.response.data.error);
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className='h-screen relative -mt-20' style={{backgroundImage:"url(./category_bg.png)"}}>
            <div className='flex w-4/5 m-auto items-center h-4/6'>
                <div className='text-white w-2/6 h-4/5 flex flex-col justify-evenly'>
                    <h3 className='text-3xl font-bold mt-10 w-4/5'>Best <span className='text-purple-800'>Pro Gaming</span> Categories</h3>
                    <div>
                        <button onClick={() => setCategory('Console')} className={`flex items-center ${category != 'Console' ? 'bg-transparent border border-purple-800 rounded-tr-2xl rounded-bl-2xl' : ''} py-3 px-4 bg-purple-800 rounded-tr-2xl rounded-bl-2xl mr-4 text-xs w-44 mb-5`}><BiJoystick className='mr-2' style={{fontSize:"18px"}}/>Console</button>
                        <button onClick={() => setCategory('Chair')} className={`flex items-center py-3 px-4 border border-purple-800 rounded-tr-2xl ${category === 'Chair' ? 'bg-purple-800 text-white' : 'bg-transparent'} rounded-bl-2xl mr-4 text-xs text-purple-800 w-44 mb-5`}><CiSpeaker className='mr-2' style={{fontSize:"18px"}} />Chairs</button>
                        <button onClick={() => setCategory('Monitors')} className={`flex items-center py-3 px-4 border border-purple-800 rounded-tr-2xl ${category === 'Monitors' ? 'bg-purple-800 text-white' : 'bg-transparent'} rounded-bl-2xl mr-4 text-xs text-purple-800 w-44`}><GiPowerGenerator className='mr-2' style={{fontSize:"18px"}} />Monitors</button>
                    </div>
                    <Link href="/collections" className='text-gray-400 underline cursor-pointer'>Show more categories</Link>
                </div>
                <Slider className='flex justify-center w-4/5' {...settings}>
                    {products?.map((product,index)=>(
                        <Card key={index} productInfo={product} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Categories;
