'use client'
import { authClient } from '@/lib/auth-client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
const path=usePathname();
const hideNavLinks = path === "/Login" || path === "/Register";
const { data: session } = authClient.useSession()
const user =session?.user


  const navLinks = (
      <>
      <li>
        <Link
          href="/"
          className={`hover:text-green-900 text-green-700 font-semibold transition-colors ${
            path === "/" ? "border-b-2 border-green-900" : ""
          }`}
        >
          Home
        </Link>
      </li>

      <li>
         <Link
          href="/animals"
          className={`hover:text-green-700 font-semibold text-black ${
            path === "/animals" ? "border-b-2 border-green-900" : ""
          }`}
        >
          All Animals
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 lg:px-8">
      <div className="navbar-start">
        
   {/* Mobile Dropdown */}
{!hideNavLinks && (
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>

    <ul 
      tabIndex={0} 
      className="menu menu-sm dropdown-content bg-transparent rounded-box z-100 absolute mt-3 w-52 p-2 shadow-2xl gap-2 text-black"
    >
      {navLinks}
    </ul>
  </div>
)}
        
        {/* Logo */}
        <div className=" text-2xl font-bold tracking-tight">
          <span className="text-green-700">Qurbani</span>Mart
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
  {!hideNavLinks && (
    <ul className="menu menu-horizontal px-1 gap-6 text-white">
      {navLinks}
    </ul>
  )}
</div>

      
     {user ? (
  <div className="navbar-end flex items-center gap-4">
    {/* Logout Button */}
<button 
  onClick={async () => {
    await authClient.signOut();
    window.location.href = "/Login";
    
  }}
  className="py-2 px-6 rounded-full bg-green-900 text-sm font-bold text-white hover:bg-green-700"
>
  Logout
</button>

    {/* User Avatar */}
    <Link href="/Profile" className="avatar">
      <div className="w-10 h-10 rounded-full ring-2 ring-green-900 ring-offset-base-100 ring-offset-2 cursor-pointer overflow-hidden">
        <Image 
          src={user.image}
          width={40} 
          height={40} 
          alt="User profile"
        />
      </div>
    </Link>
  </div>
) : (
  <div className="navbar-end flex flex-row flex-wrap justify-end gap-2 sm:gap-3">
  <Link 
    href="/Login" 
    className="py-2 px-3 sm:px-5 rounded-full bg-green-900 text-xs sm:text-sm font-bold text-white hover:bg-green-700 transition-all duration-300 shadow-sm"
  >
    Login
  </Link>

  <Link 
    href="/Register" 
    className="py-2 px-3 sm:px-5 rounded-full bg-green-900 text-xs sm:text-sm font-bold text-white hover:bg-green-700 transition-all duration-300 shadow-sm"
  >
    Register
  </Link>
</div>
)}
    </div>
  );
};

export default Navbar;