import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

function Blog({searchParams}) {
  const data = JSON.parse(searchParams.data);
  return (
    <>
        <div className='h-fit'>
            <div className='bg-cover h-4/6 text-white pb-36' style={{backgroundImage:"url(./blogbg.png)"}}>
              <div className='flex flex-col justify-between w-4/5 h-1/2 m-auto opacity-100 z-10 relative'>
                <Link href="/" className='w-1/2 flex items-center mb-5 mt-20 '>
                  <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer' style={{fontSize:"40px"}} />
                  <span className='text-gray-400 font-semibold text-xs'>Back to shop</span>
                </Link>
                <div className=' text-xs w-1/2 flex justify-between items-center mb-10'>
                  <span className='text-sm bg-purple-600/40 rounded-md px-2 py-1 font-bold text-white'>Featured</span>
                  <span><span className='font-bold'>Category:</span> news</span>
                  <span><span className='font-bold'>Date:</span> December 13, 2022</span>
                </div>
                <h2 className=' w-1/2  text-3xl text-purple-600 font-bold mb-5'>{data.title}</h2>
                <p className=' w-1/2 text-sm'>Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was...</p>
              </div>
              <div className='absolute top-40 w-full h-3/5 bg-black opacity-50 z-0'></div>
            </div>
        </div>
        <div className='flex w-4/5 m-auto py-20'>
          <div className='w-5/6'>
            <div className='mb-10'>
              <span className='text-sm text-gray-400 mr-20'><span className='font-bold italic'>GamingGalaxy</span>,Gamingalxy.com</span>
              <span className='text-sm text-gray-400 mr-20'><span className='font-bold'>Category:</span> news</span>
              <span className='text-sm text-gray-400'><span className='font-bold'>Date:</span>{data.date}</span>
            </div>
            <h1 className='text-3xl font-bold mb-5'>{data.title}</h1>
            <img className='w-full mb-10' src={data.img} alt="Blog" />
            <p className='text-sm text-gray-400 mb-5'>Gambling has been a main recreational activity in Great Britain for centuries. Queen Elizabeth I chartered a lottery that was drawn in 1569. Horseracing has been a favorite theme for over three centuries. It has been heavily regulated.[14] Historically much of the opposition comes from Nonconformist Protestants, and from social reformers
              Boomstick Gaming, a renowned game developer, has recently released a captivating Dev Diary video detailing an exciting new feature called Season Points in their latest game. This innovative addition aims to enhance the gameplay experience and provide players with even more incentives to dive into the virtual world they&apos;ve meticulously crafted.
              Season Points introduce a fresh layer of progression and rewards for players who engage with the game over an extended period. It serves as a testament to Boomstick Gaming&apos;s commitment to keeping their community engaged and entertained. Let&apos;s delve deeper into what Season Points entail and how they transform the gameplay dynamics. At its core, Season Points is a system that tracks a player&apos;s progress throughout each season of the game.</p>
            <div className='flex mb-10'>
              <img className='w-12 h-8' src='./Quote.png' alt="Quote" />
              <p className='text-sm text-gray-400 font-bold'>These seasons, typically lasting a predefined period, bring new challenges, content updates, and exciting events. With Season Points, players earn rewards based on their in-game accomplishments, such as completing quests, defeating formidable foes, or achieving milestones.</p>
            </div>
            <span className='text-gray-500'><span className='font-bold'>Tags:</span> Game</span>
          </div>
          <div className='border-2 rounded-tr-2xl rounded-bl-2xl h-fit p-4 ml-10'>
              <h3 className='text-2xl text-gray-500 font-bold'>Leave a Comment</h3>
              <form className='flex flex-col my-4'>
                <input className='py-2 px-4 border rounded-tr-2xl rounded-bl-2xl mb-4 outline-none' type="text" name="name" placeholder='Name'/>
                <input className='py-2 px-4 border rounded-tr-2xl rounded-bl-2xl mb-4 outline-none' type="text" name="email" placeholder='Email' />
                <input className='py-2 px-4 border rounded-tr-2xl rounded-bl-2xl mb-4 outline-none' type="text" name="message" placeholder='Message' />
              </form>
              <button className='text-xs font-bold text-white bg-purple-500 py-2 px-4 rounded-tr-2xl rounded-bl-2xl'>Post a Comment</button>
          </div>
        </div>
    </>
  )
}

export default Blog