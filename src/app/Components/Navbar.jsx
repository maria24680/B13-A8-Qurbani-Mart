'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  
const path=usePathname();
  const navLinks = (

      <>
      <li>

        <Link
          href="/"
          className={`hover:text-green-900 text-green-700 font-semibold transition-colors ${
            path === "/All Animals" ? "border-b-2 border-green-900" : ""
          }`}
        >
          Home
        </Link>
        
        
      </li>

      <li>
        
        <Link
          href="/All Animals"
          className={`hover:text-green-700 font-semibold transition-colors ${
            path === "/All Animals" ? "border-b-2 border-green-900" : ""
          }`}
        >
          All Animals
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8 ">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <div className=" text-2xl font-bold tracking-tight">
          <span className="text-green-700">Qurbani</span>Mart
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {navLinks}
        </ul>
      </div>

      {/* Action Area */}
      <div className="navbar-end gap-4">
        

        <div className="avatar">
          <div className="w-10 h-10 rounded-full ring-2 ring-green-900 ring-offset-base-100 ring-offset-2 cursor-pointer">
            <Image 
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              width={40} 
              height={40} 
              alt="User profile"
              className="rounded-full"
            />
          </div>
        </div>

        <Link 
          href="/logout" 
          className="py-2 px-6 rounded-full bg-green-700 text-sm font-bold text-white hover:bg-green-900 transition-all duration-300 shadow-sm"
        >
          Logout
        </Link>
        
      </div>
    </div>
  );
};
export default Navbar;