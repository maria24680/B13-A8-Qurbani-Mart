"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

const handlelogin= async(data)=>{

const{email,password}=data;

    const {data:res,error}= await authClient.signIn.email({
  
    email: email,
    password:password,
    callbackURL: "/?login=success"
});

if(error){
toast.error(error.message)
}
if(res){
toast.success(`Welcome to Qurbani Mart, ${data.name}`);
}

}

const handlegoogle=async()=>{
   const data = await authClient.signIn.social({
    provider: "google",
  });
}
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* card */}
      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-black shadow-xl rounded-2xl p-8">

        {/* title */}
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          <span>Login to </span>
          <span className="text-green-900">Qurbani</span>{" "}
          <span className="text-black">Mart</span>
        </h1>

        {/* form */}
        <form className="space-y-5" onSubmit={handleSubmit(handlelogin)}>

          {/* email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
            {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border outline-none"
            />
          </div>

          {/* password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
            {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border outline-none"
            />
          </div>

          {/* button */}
          <button
          
            className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-700 font-medium transition-all"
          >
            Login
          </button>

          {/* link */}
          <p className="text-center text-sm text-green-900 mt-3 font-bold">
            Don&apos;t have an account?{" "}
            <Link href="/Register" className="underline text-black">
              Sign up
            </Link>
          </p>

        </form>

        <p className="text-center font-bold text-black">OR</p>

        <div className="flex gap-4">
          <button
            onClick={handlegoogle}
            type="button"
            className="flex-1 flex items-center justify-center rounded-lg gap-2 bg-green-900 hover:bg-green-700 text-white py-2  transition-all active:scale-95 shadow-sm font-medium"
          >
            <FaGoogle className="text-white" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;