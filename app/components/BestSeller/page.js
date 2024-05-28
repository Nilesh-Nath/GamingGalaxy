"use client"
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { BiJoystick } from "react-icons/bi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Link from 'next/link';

function BestSeller() {

  useEffect(()=>{
    getData();
  },[]);

  const [products,setProducts] = useState([]);

  async function getData(){
    try{
      const response = await axios.get('/api/product');
      setProducts(response.data.products);
      console.log(products);
    }catch(error){
      console.error(error);
    }
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='h-fit relative -top-10 text-white' style={{backgroundImage:"url(./BestSeller.png)"}}>
        <div className='w-4/5 m-auto'>
            <div className='text-white flex justify-between mb-20'>
                <h2 className='text-3xl font-bold'>Bestseller Of The Week</h2>
                <Link href="/Product" className='flex items-center py-3 px-4 border border-purple-800 rounded-tr-2xl rounded-bl-2xl mr-4 text-xs hover:bg-purple-800'>Show Products<BiJoystick className='ml-2' style={{fontSize:"18px"}}/></Link>
            </div>
            <Slider {...settings}>
              {products.map((product,index)=>(
                <Card key={index} productInfo={product} />
              ))}
            </Slider>
        </div>
        <div className="slider-container mt-24 mb-10 w-5/6 m-auto">
          <Slider {...settings}>
            <div className='outline-none'>
              <img src="./brands/alienware.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/corsair.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/Fantech.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/logitech.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/madcatz.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/razer.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/reddragon.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/sennheiser.png" alt="brands" />
            </div>
            <div  className='outline-none'>
              <img src="./brands/turtle_beach.png" alt="brands" />
            </div>
          </Slider>
        </div>
    </div>
  )
}

export default BestSeller

