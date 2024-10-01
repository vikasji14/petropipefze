import React from 'react'

import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
    return (
        <div className='bg-slate-100 pt-28'>

            <p className='font-bold text-xl'>BLOG & ARTICLES</p>
            <div className='flex text-black justify-center text-3xl font-bold'>RECENT NEWS </div>

            <div className='flex flex-col md:flex-row p-6 justify-evenly gap-2 text-xl text-black font-bold  pt-8'>
                <div className='w-80 hover:text-gray-400  bg-white p-6 text-justify'>
                    Técnicas Reunidas and Exolum Sign Agreement to Accelerate Decarbonization in Carbon-Intensive Industries
                </div>
                <div className='w-80 hover:text-gray-400  bg-white p-6 text-justify'>
                    Técnicas Reunidas and Exolum Sign Agreement to Accelerate Decarbonization in Carbon-Intensive Industries
                </div>
                <div className='w-80 hover:text-gray-400  bg-white p-6 text-justify'>
                    Técnicas Reunidas and Exolum Sign Agreement to Accelerate Decarbonization in Carbon-Intensive Industries
                </div>
            </div>

            <div className='pt-8 flex justify-center'>
                <button class="bg-red-500 text-white font-bold py-4 px-6 hover:bg-black hover:text-white     flex items-center gap-2 ">
                    More Posts <BsArrowRight />
                </button>
            </div>

        </div>
    )
}

export default Blog