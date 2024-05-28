import React from 'react'
import { BiJoystick } from "react-icons/bi";
import BlogCard from './BlogCard';
import { blogData } from '@/app/constraints/blogData';
import Link from 'next/link';

function Blogs() {
  return (
    <div className='h-content bg-black py-20'>
        <div className='text-white flex w-4/5 m-auto justify-between mb-10'>
            <h2 className='text-4xl font-bold w-1/4'>Best Pro Gaming Blog</h2>
            <p className='w-1/2 text-sm text-gray-500'>Gaming Product means any intangible asset, good or interest that can be bought or sold or otherwise is the subject of an activity constituting a Gaming Business.</p>
            {/* <Link href="/Blog" className='flex items-center px-4 border h-10 border-gray-400 rounded-tr-2xl rounded-bl-2xl text-xs text-gray-500'>Show More<BiJoystick className='ml-2' style={{fontSize:"18px"}}/></Link> */}
        </div>
        <div className='w-4/5 m-auto flex flex-wrap justify-start'>
            {
                blogData.map((data,index)=>(
                    <div key={index} className="w-1/4 p-2">
                        <BlogCard data={data} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blogs