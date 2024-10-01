import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { PiDotsNineBold } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarclose = () => {
    setIsSidebarOpen(false);
  }

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className=" text-white lg:p-12 md:p-12 p-4 ">
      <div className='flex justify-between'>
        <div className="flex flex-row items-center gap-8 ">
          <div className='flex flex-row gap-28'>

            <div>
              {/* Logo */}
              <Link to="/" className="text-xl  font-bold">
                <img src={logo} alt="Logo" className="w-40" />
              </Link>
            </div>

            {/* Menu Icon for small screens */}
            <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
              <IoMdMenu size={40} />
            </div>

          </div>

          <div>
            {/* Desktop Navigation Links (hidden on small screens) */}
            <ul className="hidden lg:flex lg:flex-row space-x-6 font-extrabold ">
              <li>
                <Link to="/" className="hover:text-yellow-400 hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 hover:underline">About</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-yellow-400 hover:underline ">Product</Link>
              </li>
              <li>
                <Link to="/oems" className="hover:text-yellow-400 hover:underline">OEMS</Link>
              </li>
              <li>
                <Link to="/blog-news" className="hover:text-yellow-400 hover:underline">Blog and News</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 hover:underline">Contact</Link>
              </li>
            </ul>


          </div>


          {/* large screen right side menu icon */}
        </div>

        <div className='hidden lg:flex  items-center gap-4'>
          <PiDotsNineBold color="black" size={40} onClick={toggleSidebar} />
          <button class="bg-blue-500 text-white font-bold py-2 px-4 hover:bg-white hover:text-black flex items-center gap-2 ">
            Request a quote <BsArrowRight />
          </button>

          {
            isSidebarOpen && (
              <div
                className={`fixed top-0 right-0 h-full w-[400px] bg-gray-800 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                  }`}
              >

                <div className="p-4">
                  {/* <h2 className="text-xl">Sidebar Content</h2> */}
                  <div>
                    <div className='flex flex-row gap-28 top-0'>

                      <div>
                        {/* Logo */}
                        <Link to="/" className="text-xl  font-bold">
                          <img src={logo} alt="Logo" className="w-40" />
                        </Link>
                      </div>

                      {/* Menu Icon for sidebar screens */}
                      <div className="cursor-pointer" onClick={toggleSidebarclose}>
                        <RxCross2 size={40} />
                      </div>

                    </div>

                    <div className='flex flex-col items-start gap-8 pt-10 '>
                      <a href='#' className='flex gap-4 flex-row items-center hover:text-blue-900 hover:font-bold'><FaFacebookSquare />FACEBOOK</a>
                      <a href='#' className='flex gap-4 flex-row items-center hover:text-blue-900 hover:font-bold'><FaLinkedin />LINKEDIN</a>
                      <a href='#' className='flex gap-4 flex-row items-center hover:text-blue-900 hover:font-bold'><FaSquareTwitter />TWITTER</a>
                      <a href='#' className='flex gap-4 flex-row items-center hover:text-blue-900 hover:font-bold'><FaSquareInstagram />INSTAGRAM</a>
                    </div>
                    <div class=" flex  border-t border-gray-300 my-12 "></div>


                  </div>

                </div>
              </div>
            )
          }



        </div>






      </div>

      {/* Mobile Menu (sliding from the top) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50  p-4 space-y-8 text-xl text-white transition-transform transform translate-y-0 duration-300">

          <div>
            <div className='flex flex-row gap-28 top-0'>

              <div>
                {/* Logo */}
                <Link to="/" className="text-xl  font-bold">
                  <img src={logo} alt="Logo" className="w-40" />
                </Link>
              </div>

              {/* Menu Icon for small screens */}
              <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
                <RxCross2 size={40} />
              </div>

            </div>
          </div>

          <div className='flex flex-col items-start gap-4 '>
            <Link to="/" className="hover:text-yellow-400 " onClick={handleMenuClose}>Home</Link>
            <Link to="/about" className="hover:text-yellow-400 flex items-center gap-2" onClick={handleMenuClose}>About <BsArrowRight /></Link>
            <Link to="/product" className="hover:text-yellow-400 flex items-center gap-2" onClick={handleMenuClose}>Product <BsArrowRight /></Link>
            <Link to="/oems" className="hover:text-yellow-400" onClick={handleMenuClose}>OEMS</Link>
            <Link to="/blog-news" className="hover:text-yellow-400" onClick={handleMenuClose}>Blog and News</Link>
            <Link to="/contact" className="hover:text-yellow-400" onClick={handleMenuClose}>Contact</Link>
          </div>
          <div class=" flex  border-t border-gray-300 my-12 "></div>

          <div className='flex flex-row gap-4'>
          <a href='#' className=' hover:text-blue-900 hover:font-bold'><FaFacebookSquare/></a>
            <a href='#' className=' hover:text-blue-900 hover:font-bold'><FaLinkedin/></a>
            <a href='#' className=' hover:text-blue-900 hover:font-bold'><FaSquareTwitter/></a>
            <a href='#' className=' hover:text-blue-900 hover:font-bold'><FaSquareInstagram/></a>
          </div>

          <div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
