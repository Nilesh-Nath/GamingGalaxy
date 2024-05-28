// import Link from 'next/link';
// import React from 'react'
// import { IoIosArrowRoundBack } from "react-icons/io";

// function Search() {
//   return (
//     <>
//     <div className='bg-black'>
//         <div className='w-4/5 m-auto py-16'>
//             <div className='w-1/2 flex items-center mb-5'>
//                 <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
//                 <Link href="" className='text-white font-semibold text-xs'>Back to shop</Link>
//             </div>
//             <h1 className='text-4xl text-purple-600 font-bold mb-5'>Search</h1>
//             <p className='text-xs font-medium text-white w-1/2'>Search whatever product you want from our shop :)</p>
//         </div>
//     </div>
//     <div className='w-4/5 m-auto py-20'>
//         <form>
//             <input type="text" id="fname" name="fname" placeholder='Search Products....' className='border border-gray-800 w-9/12 outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl text-xs bg-transparent text-gray-400' />
//         </form>
//     </div>
// </>
//   )
// }

// export default Search
"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    try {
        if (value.trim() === '') {
          setSearchResults([]);
        } else {
          const response = await axios.post(`/api/search?query=${value}`);
          setSearchResults(response.data.products);
          console.log(response.data.products);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
  };

  return (
    <>
      <div className='bg-black'>
          <div className='w-4/5 m-auto py-16'>
              <div className='w-1/2 flex items-center mb-5'>
                  <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                  <Link href="/" className='text-white font-semibold text-xs'>Back to shop</Link>
              </div>
              <h1 className='text-4xl text-purple-600 font-bold mb-5'>Search</h1>
              <p className='text-xs font-medium text-white w-1/2'>Search whatever product you want from our shop :)</p>
          </div>
      </div>
      <div className='w-4/5 m-auto py-20'>
          <form>
              <input type="text" id="searchInput" name="searchInput" placeholder='Search Products....' className='border border-gray-800 w-9/12 outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl text-xs bg-transparent text-gray-400' value={searchTerm} onChange={handleChange} />
          </form>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Search Results : ({searchResults.length}) results found</h2>
            <ul>
              {searchResults.map((product) => (
                <Link href={{pathname:"/productDetails",query:{data:JSON.stringify(product)}}} className='border flex items-center justify-around mb-2' key={product._id}>
                    <img className='w-32' src={product.image} alt={product.name} />
                    <span className='text-xl font-bold w-1/4'>{product.name}</span>
                    <span className='font-bold'>{product.type}</span>
                    <span className=''>{product._id}</span>
                    <span className=''>{product.price}<span className='font-bold'> NPR</span></span>
                </Link>
              ))}
            </ul>
          </div>
      </div>
  </>
  );
}

export default Search;

