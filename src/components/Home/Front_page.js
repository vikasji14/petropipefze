


import React from 'react';
import Navbar from '../Navbar';
import homeVideo from '../../image/video.mp4';
import { FiArrowDown } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const NaveHomePage = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={homeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="flex flex-col justify-between pb-20 h-screen w-full p-4  relative z-10"> {/* z-10 to ensure text is above the video */}
            <Navbar className="flex w-ful" />
                <div className='bg-black bg-opacity-50 p-6 rounded'>
                    <div className="md:text-4xl text-2xl text-start font-bold text-white">
                        STREAMLINING INDUSTRIES WITH QUALITY PIPE AND VALUE SOLUTIONS
                    </div>
                    <div className='flex pt-4 items-center text-white font-thin'>
                        <div>
                            <FiArrowDown size={60} />
                        </div>
                        <div className="pl-2 text-start text-sm">
                            Discover a comprehensive range of high-quality pipes, valves, and fittings designed to meet your industrial needs.
                        </div>
                    </div>
                    <div className='pt-4'>
                        <button className="bg-red-500 text-white font-bold py-2 px-4 hover:bg-red-700 flex items-center gap-2">
                            Learn More <BsArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NaveHomePage;
