"use client";

import React from "react";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
import Link from "next/link";

const Register = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      
      

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-black shadow-xl rounded-2xl p-8">
        
        <h1 className="text-2xl font-bold text-center text-green-900 mb-2">
          Create Account
        </h1>

        <p className="text-center text-xl text-white mb-6">
           <span className='text-green-900'> Qurbani </span>Mart
        </p>

        <form className="space-y-5">

          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-900 transition">
            Register
          </button>

          <p className="text-center text-sm text-green-900 mt-4">
            Already have an account?{" "}
            <Link href="Login" className="underline text-black">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;