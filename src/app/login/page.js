import React from 'react';
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";


const Login = () => {
    return (
  
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

     
     


      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-black shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center text-white mb-2">
          <span className='text-white'>Login to</span><span className='text-green-900'> Qurbani </span> <span className='text-black'>Mart</span>
        </h1>

        

        <form className="space-y-5">

         
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>



          <button className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Login
          </button>

         
          <p className="text-center text-sm text-green-900 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="Register" className="underline text-black">
              Sign up
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};


export default Login;