'use client'
import Link from 'next/link';
import React from 'react'

function BlogCard({data}) {
    function sliceTitle(title) {
        if (title.length > 12) {
          return title.substring(0, 16) + '....';
        }
        return title;
      }
      const jsonData = JSON.stringify(data);
  return (
    <div className='text-white w-60'>
        <div className='flex justify-between items-center mb-2'>
            <span className='text-sm bg-purple-600/40 rounded-md px-2 py-1 font-bold text-white'>News</span>
            <span className='text-xs'>{data.date}</span>
        </div>
        <img className='border rounded-tr-3xl rounded-bl-3xl border-purple-500' src={data.img} alt={data.title}/>
        <h3 className='text-xl font-bold mt-4 mb-2'>{sliceTitle(data.title)}</h3>
        <span className='text-sm text-gray-400'>Author: {data.author}</span>
        <Link href={{ pathname: "/Blog" , query:{data:jsonData} }} className='flex items-center uppercase font-bold w-fit px-6 py-2 border border-purple-800 mt-4 bg-purple-800 rounded-tr-2xl rounded-bl-2xl text-xs text-white hover:bg-transparent hover:border hover:border-purple-800'>Read</Link>
    </div>
  )
}

export default BlogCard