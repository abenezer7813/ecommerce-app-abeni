'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 
import Image from 'next/image';
import logo from "../public/logo.png"
import Box from './Box';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuLinks = [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
    ];
  
    const toggleMobileMenu = () => {
      setMobileMenu(!mobileMenu);
    };
  
  return (
    <header className='w-full text-primaryy z-20 sticky top-0 '>
        <Box 
        className='h-[100px] flex justify-between items-center px-4 md:px-8'
        >
        <Link href={'/'} className="w-[120px] md:w-[140px]">
          <Image 
          alt='logo'
            height={200}
            width={200}
            src={logo}
          />
        </Link>
        <div className="hidden md:flex space-x-5">
          {menuLinks.map((link, index) => (
            <Link key={index} href={link.link} className="hover:underline hover:text-secondaryy cursor-pointer">
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
        <span className="relative z-10">
            <FaShoppingCart size={20}  />
            <span className="absolute -top-4 -right-2 bg-gray-200 text-red text-lg rounded-full w-5 h-5 flex items-center justify-center">
            3 
            </span>
        </span>
        <span className='cursor-pointer'>Username</span>
        </div>
           <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        </Box>
        {mobileMenu && (
        <div className="md:hidden bg-primaryy text-white p-5 space-y-4 ">
          {menuLinks.map((link, index) => (
            <Link key={index} href={link.link} className="block hover:underline hover:text-secondaryy">
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar