"eslint"

import React from 'react';
import Navbar from '../Navbar';
import homeImage from '../../image/front_page.jpg'; 
import { FiArrowDown } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";  


const NaveHomePage = () => {
    return (
        <div
            className="h-screen bg-cover bg-center "
            style={{ backgroundImage: `url(${homeImage})` }}
        >
            <Navbar />
            <div className="flex  items-center  p-4 h-full  ">

                <div className=''>
                    <div className="text-4xl font-bold text-white w-1/2 text-justify lg:text-nowrap ">STREAMLINING INDUSTRIES WITH QUALITY PIPE AND VALUE SOLUTIONS</div>

                    <div className='flex pt-4 items-center text-white font-thin'  >
                        <div>
                            <FiArrowDown size={60} />
                        </div>
                        <div>
                            Discover a comprehensive range of high-quality pipes, valves, and
                            fittings Designed to meet your industrial needs
                        </div>

                    </div>

                    <div className='pt-4'>
                        <button class="bg-red-500 text-white font-bold py-2 px-4 hover:bg-red-700 flex items-center gap-2 ">
                            Learn More <BsArrowRight />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NaveHomePage;
