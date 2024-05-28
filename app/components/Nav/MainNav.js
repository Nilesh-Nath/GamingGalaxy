'use client'
import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function MainNav() {
    const [dropdownContent, setDropdownContent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [user,setUser] = useState({
        id : "",
        email : "",
        name : ""
    });
    const router = useRouter();
    
    useEffect(()=>{
        getServerSideProps()
    },[])

    async function getServerSideProps(){
        try{
            const response = await axios.get("/api/getServerSideProps");
            setUser(response.data.userData);
        }catch(error){
            console.log(error.response.data.error);
        }
    }
  
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

    
    const handleLogOut = async ()=>{
        try{
            const response = await axios.get('/api/users/logout');
            router.push("/login")
        }catch(error){
            console.log(error.response.data.error);
        }
    }


    const handleMouseEnter = (content) => {
        setDropdownContent(content);
    };

    const handleMouseLeave = () => {
    };

    const handleDropdownMouseLeave = () => {
        setDropdownContent(null);
    };

  return (
    <div className="z-50 w-full bg-black">
        <div className='flex items-center py-6 bg-transparent text-white text-sm border-b border-gray-800'>
            <div className='flex items-center justify-between w-4/5 m-auto z-50'>
                <div>
                    <ul className='flex'>
                        <li className='flex items-center mr-4 relative' onMouseEnter={() => handleMouseEnter('gaming')} onMouseLeave={handleMouseLeave}>
                            <span>Gaming Accessories</span> <RiArrowDropDownLine className='text-purple-800' style={{ fontSize: "20px" }} />
                            {dropdownContent === 'gaming' && (
                                <div className="absolute top-full left-0 mt-1 w-40 bg-gray-900 rounded-lg p-2 text-xs z-50" onMouseEnter={() => handleMouseEnter('gaming')} onMouseLeave={handleDropdownMouseLeave}>
                                    <Link href="/collections/All_Collections?type=All_Collections" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">All Collections</Link>
                                    <Link href="/collections/Gaming PCs?type=Game PCs" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Gaming PCs</Link>
                                    <Link href="/collections/Console?type=Console" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Console</Link>
                                    <Link href="/collections/Remote?type=Remote" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Remote</Link>
                                    <Link href="/collections/Cards?type=Cards" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Cards</Link>
                                    <Link href="/collections/Chair?type=Chair" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Chairs</Link>
                                    <Link href="/collections/Monitors?type=Monitors" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Monitors</Link>
                                    <Link href="/collections/Headsets?type=Headsets" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Headsets</Link>
                                    <Link href="/collections/Keycaps?type=Keycaps" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Keycaps</Link>
                                
                                </div>
                            )}
                        </li>
                        <li className='flex items-center mr-4 relative' onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={handleMouseLeave}>
                            <span>Pages </span> <RiArrowDropDownLine className='text-purple-800' style={{ fontSize: "20px" }} />
                            {dropdownContent === 'pages' && (
                               <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900 rounded-lg p-2 text-xs z-50 shadow-md" onMouseEnter={() => handleMouseEnter('pages')} onMouseLeave={handleDropdownMouseLeave}>
                                   
                               <Link href='/about' className="block py-1 hover:bg-gray-800 transition duration-300 px-4">About Us</Link>
                               <Link href="/contact" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Contact Us</Link>
                               <Link href="/faq" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">FAQ&apos;s</Link>
                               <Link href="/privacy-policy" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Privacy Policy</Link>
                               <Link href="/shipping-delivery" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Shipping & Delivery</Link>
                               <Link href="/terms-conditions" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">Terms & Conditions</Link>
                               
                           </div>
                            )}
                        </li>
                        <li className='flex items-center mr-4 relative' onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
                            <span>Blog</span> <RiArrowDropDownLine className='text-purple-800' style={{ fontSize: "20px" }} />
                            {dropdownContent === 'blog' && (
                                <div className="absolute top-full left-0 mt-1 w-32 bg-gray-900 rounded-lg p-2 text-xs z-50" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleDropdownMouseLeave}>
                                    {/* Dropdown content for Blog */}
                                    <a href="#" className="block py-1 hover:bg-gray-800 transition duration-300">Tech Reviews</a>
                                    <a href="#" className="block py-1 hover:bg-gray-800 transition duration-300">Game Reviews</a>
                                    {/* Add more items as needed */}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <h1 className='text-3xl font-bold'>Gaming<span className='text-purple-800'>Galaxy.</span></h1>
                <div className='flex items-center'>
                    {/* <CiUser className='mr-4' style={{ fontSize: "25px" }} /> */}
                    <div className='relative flex items-center' onMouseEnter={() => handleMouseEnter('user')} onMouseLeave={console.log(handleMouseLeave)}>
                            <CiUser className='hover:cursor-pointer hover:text-purple-700 mr-2' style={{ fontSize: "25px" }} />
                            {
                                user ? <>{user.name}</>  : <></>
                            }
                            {dropdownContent === 'user' && (
                                <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900 rounded-lg p-2 text-xs z-50 shadow-md" onMouseEnter={() => handleMouseEnter('user')} onMouseLeave={handleDropdownMouseLeave}>
                                    {
                                        user.id ? ( 
                                        <>
                                            <Link href="/signup" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">SignUp</Link>
                                            <Link href="/login" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">LogIn</Link>
                                            <span onClick={handleLogOut} className="block py-1 cursor-pointer hover:bg-gray-800 transition duration-300 px-4">LogOut</span>
                                        </>
                                        ) : 
                                        ( <>
                                            <Link href="/signup" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">SignUp</Link>
                                            <Link href="/login" className="block py-1 hover:bg-gray-800 transition duration-300 px-4">LogIn</Link>
                                        </>
                                         )
                                    }
                                    </div>
                            )}
                    </div>
                    <div className='flex items-center'>
                        {
                            user.id ? (
                                <Link href="/Cart"><CiShoppingCart className='ml-4 hover:cursor-pointer hover:text-purple-700' style={{ fontSize: "25px" }} /></Link>
                                ) : (
                                <Link href="/login"><CiShoppingCart className='ml-4 hover:cursor-pointer hover:text-purple-700' style={{ fontSize: "25px" }} /></Link>
                            )
                        }
                    </div>
                    <div className='flex items-center'>
                        {
                            user.id ? (
                                <Link href="/wishlist"><CiHeart className='ml-4 hover:cursor-pointer hover:text-pink-600' style={{ fontSize: "25px" }} /></Link>
                            ) : (
                                <Link href="/login"><CiHeart className='ml-4 hover:cursor-pointer hover:text-pink-600' style={{ fontSize: "25px" }} /></Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center py-3 bg-transparent text-white text-sm border-b border-gray-800'>
            <div className='flex items-center justify-between w-4/5 m-auto'>
                <div>
                    New Accessories -30 % Off. <span className='underline cursor-pointer'>More</span>
                </div>
                <div className='w-1/2 relative'>
                    <form>
                        <input value={searchTerm} onChange={handleChange} type="text" id="fname" name="fname" placeholder='Search Product....' className='border border-gray-800 w-9/12 outline-none py-4 px-4 rounded-tr-2xl rounded-bl-2xl text-xs bg-transparent text-gray-400' />
                    </form>
                    {
                        searchResults.length > 0 ? (
                            <div className='absolute top-full left-0 mt-1 w-1/2 bg-gray-800 text-white rounded-lg p-2 text-xs z-50 shadow-md'>
                                {
                                    searchResults.map((product,index)=>(
                                        <Link href={{pathname:"/productDetails",query:{data:JSON.stringify(product)}}} className='flex items-center cursor-pointer mb-2 rounded-xl hover:bg-gray-700 transition-all duration-300 ease-in-out' key={index}>
                                            <img className='w-16 mr-2' src={product.image} alt={product.name} />
                                            <div className='flex flex-col justify-between'>
                                                <span className='text-sm'>{product.name}</span>
                                                <span className='text-xs text-gray-400'>{product.type}</span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        ) : <></>
                    }
                </div>
                <Link href="/collections" className='flex items-center underline cursor-pointer'>
                    New Collections
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MainNav;

