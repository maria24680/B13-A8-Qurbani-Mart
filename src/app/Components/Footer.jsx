import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import React from 'react';

const Footer = () => {
    return (
     <footer className="footer p-10 bg-green-900 text-white border-t border-green-400 flex flex-col md:flex-row justify-between">
 
  <div>
    <h1 className="footer-title opacity-100 ">Qurbani Mart</h1>
    <p> Your trusted marketplace for Qurbani<br />
    animals.We provide healthy & quality <br />
    animals.Enjoy a safe and reliable service <br /> every time.</p>
  </div>


  <nav>
    <h1 className="footer-title opacity-100 ">Contact Us</h1>
    <p className="flex items-center gap-2">
    <FaPhoneAlt />+880123456789
    </p>
    <p className="flex items-center gap-2">
    <MdEmail />qurbanimart@gmail.com
    </p>
    <p className="flex items-center gap-2">
    <FaLocationDot />Mirpur,Dhaka,Bangladesh
    </p>

  </nav>

  
  <nav>
    <h6 className="footer-title opacity-100 ">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a href="#" className="hover:text-green-900 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <a href="#" className="hover:text-green-900 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
      </a>
      <a href="#" className="hover:text-green-900 transition-all duration-300 transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h5v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
    </div>
  </nav>

  
</footer>
    );
};

export default Footer;