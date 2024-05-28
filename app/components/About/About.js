import React from 'react'

function About() {
  return (
    <div>
        <div className='w-4/5 m-auto pb-20'>
            <h2 className='text-4xl font-bold w-1/4 mb-4'>About our shop</h2>
            <p className='text-xs text-gray-400 mb-5'>Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.</p>
            <div className='flex'>
                <div className='text-white w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
                    <span className='text-4xl font-bold text-blue-500/80 mb-4'>01</span>
                    <p className='text-2xl text-black font-bold mb-2'>Gift Boxes</p>
                    <p className='text-xs text-gray-400 pr-10'>Finished Products products gift wrapping</p>
                </div>
                <div className='text-white w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
                    <span className='text-4xl font-bold text-blue-500/80 mb-4'>02</span>
                    <p className='text-2xl text-black font-bold mb-2'>Promotions</p>
                    <p className='text-xs text-gray-400 pr-10'>Large promotions with numerous discounts</p>
                </div>
                <div className='text-white w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
                    <span className='text-4xl font-bold text-blue-500/80 mb-4'>03</span>
                    <p className='text-2xl text-black font-bold mb-2'>Shipping</p>
                    <p className='text-xs text-gray-400 pr-10'>Free shipping on any order from NRP 1500</p>
                </div>
                <div className='text-white w-72  rounded-tr-2xl rounded-bl-2xl p-4 m-auto flex flex-col border border-purple-700 bg-blue-500/20'>
                    <span className='text-4xl font-bold text-blue-500/80 mb-4'>04</span>
                    <p className='text-2xl text-black font-bold mb-2'>Quality</p>
                    <p className='text-xs text-gray-400 pr-10'>All products are made by engineers from Japan</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About