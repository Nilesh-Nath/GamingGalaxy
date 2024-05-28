import React from 'react'
import { collectionsData } from '../constraints/collectionsData'
import Link from 'next/link'

function Collection() {
  return (
    <div className='w-4/5 m-auto flex flex-col items-center py-20'>
        <h2 className='text-4xl font-bold mb-10 mt-20'>Collections</h2>
        <div className='flex flex-wrap'>
            {
                collectionsData.map((data,index)=>(
                   <Link href={{
                                pathname:`/collections/${data.title}`,
                                query:{type:data.title}
                            }} className='w-1/3 mb-8' key={index}>
                        <div className='flex flex-col items-center'>
                            <img className='w-96 mb-4' src={data.img} alt={data.title} />
                            <span className='text-xl text-gray-600'>{data.title}</span>
                        </div>
                   </Link>   
                ))
            }
        </div>
    </div>
  )
}

export default Collection