import React from 'react'
import { Link } from 'react-router-dom';
import pipe from '../../image/pipe.png'
import valve from '../../image/valve.png'
import instrument from '../../image/instrument.png'
import fab from '../../image/fav.png'
import spares from '../../image/spares.png'
import sr from '../../image/sr.png'
import pe from '../../image/pe.png'
import moter from '../../image/moter.png'
import { BsArrowRight } from "react-icons/bs";

const OurProducts = () => {
    return (
        <div>
            <div className='text-4xl font-bold pt-4 '>OUR PRODUCTS </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 items-center justify-center   lg:pl-40 lg:pr-40 gap-6 p-6">
                <img src={pipe} className=" w-full flex h-40 items-center justify-center" />
                <img src={valve} className=" w-full flex h-40 items-center justify-center" />
                <img src={instrument} className="w-full h-40 flex items-center justify-center" />
                <img src={fab} className=" flex h-40 w-full items-center justify-center" />
                <img src={spares} className=" flex h-40 w-full items-center justify-center" />
                <img src={sr} className=" flex h-40 w-full items-center justify-center" />
                <img src={pe} className=" flex w-full h-40 items-center justify-center" />

            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 pt-8  items-center justify-center lg:pl-44 lg:pr-44 p-6'>
                <div className='flex '>
                    <img src={moter} className=" h-[500px]" />
                </div>
                <div className='h-full flex flex-col gap-4 pt-20'>
                    <div className='flex text-gray-800 font-xl '>About us</div>
                    <div className='flex text-black text-3xl font-bold'>WHO WE ARE</div>
                    <div className='flex text-gray-600 text-justify'>
                        Petropipe is a leading international supplier of modular packages for oil and gas applications, onshore and offshore. With a presence in the United Arab Emirates, Qatar, India, Botswana, Egypt, Ghana, Mozambique, Republic of Congo, Zambia, and Zimbabwe, we provide custom solutions tailored to clients' technical needs.
                    </div>
                    <div className='flex text-gray-600 text-justify'>
                        As a registered entity with many End-Users and EPCs, we excel in managing projects with unique requirements across sectors such as Oil & Gas, Petrochemical, Construction, Marine, Plastics, Refineries, and both Renewable and Non-Renewable energy.
                    </div>

                    <div>
                        <button class="bg-red-500 text-white font-bold py-2 px-4 hover:bg-black hover:text-white     flex items-center gap-2 ">
                            Learn More <BsArrowRight />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurProducts