import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col  bg-black  lg:pl-32 lg:pr-20  p-6  text-white' >
        <div className='grid lg:grid-cols-4  mg:grid-cols-4 sm:grid-cols-1 md:gap-20 gap-10 justify-around'>

          <div className=''>
            <div>
              <Link to="/" className="text-xl  font-bold">
                <img src={logo} alt="Logo" className="w-40" />
              </Link>
            </div>
            <div className='text-justify text-white pt-2'>Petropipe is a leading international supplier of modular packages for oil and gas applications, onshore and offshore. With a presence in the United Arab Emirates, Qatar, India, Botswana, Egypt, Ghana, Mozambique, Republic of Congo, Zambia, and Zimbabwe, we provide custom solutions tailored to clients’ technical needs Read More…</div>
          </div>
          <div className='flex gap-4 flex-col items-start'>
            <div className='font-bold'>Head Office</div>
            <div className='text-justify'>Office no. 208, Al Otaiba Tower (Mercado Building),
              Near Emirates NBD Bank,
              Electra Street,
              Abu Dhabi, UAE</div>
              <a href='mailto:sales@ppfze.com' className='flex items-center gap-2'> <HiOutlineMail/>sales@ppfze.com</a>
              <div className='flex items-center gap-2'><IoCallOutline/> +9712 5505011</div>

          </div>
          <div className='flex gap-4 flex-col items-start'>
            <div className='font-bold'>Links</div>
            <a href='#' className='hover:pl-4 hover:underline hover:underline-offset-4 transition-all duration-300 delay-200'>Home</a>
            <a href='#' className='hover:pl-4 hover:underline hover:underline-offset-4 transition-all duration-300 delay-200'>About</a>
            <a href='#' className='hover:pl-4 hover:underline hover:underline-offset-4 transition-all duration-300 delay-200'>Blog & News</a>
            <a href='#' className='hover:pl-4 hover:underline hover:underline-offset-4 transition-all duration-300 delay-200'>Contact</a>


          </div>
          <div className='flex gap-4 flex-col items-start'>
            <div className='font-bold'>Get in Touch</div>
            <a href='#' className='flex gap-2 flex-row items-center hover:text-blue-900 hover:font-bold'><FaFacebookSquare/>FACEBOOK</a>
            <a href='#' className='flex gap-2 flex-row items-center hover:text-blue-900 hover:font-bold'><FaLinkedin/>LINKEDIN</a>
            <a href='#' className='flex gap-2 flex-row items-center hover:text-blue-900 hover:font-bold'><FaSquareTwitter/>TWITTER</a>
            <a href='#' className='flex gap-2 flex-row items-center hover:text-blue-900 hover:font-bold'><FaSquareInstagram/>INSTAGRAM</a>
          </div>



        </div>
        <div class=" flex  border-t border-gray-300 my-12 "></div>
        <div className='flex items-start'>PetropipeFZE © 2024. All Rights Reserved.
        </div>
      </div>



    </div>
  )
}

export default Footer