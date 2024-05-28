import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";

function AboutPage() {
  return (
    <>
        <div className='bg-black'>
            <div className='w-4/5 m-auto py-16'>
                <div className='w-1/2 flex items-center mb-5'>
                    <IoIosArrowRoundBack className='border rounded-full p-2 mr-4 cursor-pointer text-white' style={{fontSize:"40px"}} />
                    <span className='text-white font-semibold text-xs'>Back to shop</span>
                </div>
                <h1 className='text-4xl text-purple-600 font-bold mb-5'>About Us</h1>
                <p className='text-xs font-medium text-white w-1/2'>The gaming industry continues to push the boundaries of innovation, offering virtual reality experiences that blur the lines between the real and the digital.</p>
            </div>
        </div>
        <div className='w-4/5 m-auto'>
            <div className='py-16'>
                <h2 className='text-4xl font-bold'>Where Fantasy and Reality Collide</h2>
                <div className='flex w-full justify-between mt-4 '>
                    <p className='text-sm mr-5 text-gray-500'>Prepare to embark on thrilling gaming journeys that transport you to uncharted territories, distant galaxies, and epic battlegrounds. Our gaming paradise offers an unparalleled blend of excitement, competition, and camaraderie, inviting players of all levels to unleash their inner warriors and embrace the exhilaration of play. Immerse yourself in cutting-edge graphics, captivating storylines, and dynamic gameplay that push the boundaries of what&apos;s possible. From action-packed shooters that demand lightning-fast reflexes to immersive role-playing games that invite you to shape your destiny, our collection of games spans genres and offers endless possibilities.</p>
                    <p className='text-sm text-gray-500'>Whether you&apos;re a seasoned pro or a novice explorer, our gaming environment provides a space for both competition and collaboration. Connect with fellow gamers from around the world, form alliances, and embark on quests together, or go head-to-head in intense multiplayer battles that test your skills and strategies. Experience gaming like never before with our state-of-the-art technology and high-performance equipment. Immerse yourself in vivid worlds through cutting-edge virtual reality experiences or feel the precision and responsiveness of our top-of-the-line gaming accessories.</p>
                </div>
            </div>
            <div>
                <h2 className='text-4xl font-bold text-center mb-10'>Immersive Gaming Adventures: Unleash the Power of Play</h2>
                <div className='flex items-center 1-full justify-between mb-4 flex-wrap items-center'>
                    <div className='w-1/2'>
                        <h4 className='text-xl font-bold mb-4'>Explore the Ultimate Gaming Experience</h4>
                        <p className='text-sm text-gray-500'>We&apos;re dedicated to providing an unrivaled gaming experience that leaves you fully immersed and connected to the digital realms you love. But gaming is more than just entertainment; it&apos;s a community. Join us in fostering a vibrant and inclusive gaming culture that celebrates diversity and empowers players to connect, compete, and grow. Share your achievements, engage in lively discussions, and forge lasting friendships with like-minded gamers who share your passion and enthusiasm.
                        Whether you seek the adrenaline rush of competitive gaming, the exploration of vast virtual landscapes, or the joy of unraveling intricate puzzles, our gaming offerings cater to your every desire. Unlock your potential, unleash your creativity, and embark on unforgettable gaming adventures that will keep you captivated for hours on end.</p>
                    </div>
                    <img src="./abt-1.webp" alt='abt-1' />
                </div>
                <div className='flex items-center 1-full justify-between mb-4 flex-wrap items-center'>
                    <img src="./abt-2.webp" alt='abt-2' />
                    <div  className='w-1/2'>
                        <h4 className='text-xl font-bold mb-4'>Dive into the World of Gaming Excellence</h4>
                        <p className='text-sm text-gray-500'>Dive into the visually stunning landscapes and intricately designed worlds that push the boundaries of realism. From meticulously crafted characters to breathtaking environments, our games transport you to immersive digital realms that blur the line between fiction and reality. Our gaming platform caters to players of all skill levels, offering a range of difficulty settings and customizable options. Whether you&apos;re a seasoned gamer seeking a new challenge or a casual player looking to unwind and have fun, there&apos;s a game waiting for you to embark on your next adventure.
                        Join a vibrant community of fellow gamers who share your passion and enthusiasm. Connect, compete, and collaborate as you forge new friendships, exchange strategies, and celebrate victories together. Our gaming platform is not just about the games; it&apos;s about the connections and camaraderie that thrive within this dynamic world.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col py-20'>
                <h2 className='text-4xl font-bold text-center mb-4'>About our services</h2>
                <p className='text-sm text-gray-500 w-3/4 text-center m-auto mb-8'>Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform.We understand the importance of reliable and up-to-date information in today&apos;s fast-paced world.</p>
                <div className='flex flex-wrap'>
                    <div className='border border-purple-500 p-4  w-96 mr-4'>
                        <div className='flex items-center justify-between mb-2'>
                            <h4 className='text-2xl font-bold text-gray-500'>Fast delivery</h4>
                            <TbTruckDelivery className='text-gray-400' style={{fontSize:"40px"}} />
                        </div>
                        <p className='text-sm text-gray-500'>The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.</p>
                    </div>
                    <div className='border border-purple-500 p-4  w-96 mr-4'>
                        <div className='flex items-center justify-between mb-2'>
                            <h4 className='text-2xl font-bold text-gray-500'>Many offers</h4>
                            <BiSolidOffer className='text-gray-400' style={{fontSize:"40px"}} />
                        </div>
                        <p className='text-sm text-gray-500'>CMS also offers a variety of training and technical assistance to help providers and state agencies meet their responsibilities under Medicare, Medicaid, and SCHIP.</p>
                    </div>
                    <div className='border border-purple-500 p-4  w-96'>
                        <div className='flex items-center justify-between mb-2'>
                            <h4 className='text-2xl font-bold text-gray-500'>24/7 support</h4>
                            <IoIosCall className='text-gray-400' style={{fontSize:"40px"}} />
                        </div>
                        <p className='text-sm text-gray-500'>CMS Service support is available 24 hours a day, 7 days a week. You can reach them by phone, email, or chat.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutPage