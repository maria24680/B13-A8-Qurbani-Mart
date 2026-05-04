"use client";

import React from "react";
import { FaEnvelope, FaLock, FaUser, FaImage, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




  


const Register = () => {
const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlereg = async (data) => {
    
    const { name, image, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      image: image,
      password: password,
      callbackURL: "/Login",
    });


    if (!form.name || !form.email || !form.image ||!password) {
          toast.warning("Please fill all fields!");
          return;
        }
    
        setLoading(true);
    
        setTimeout(() => {
          toast.success("Welcome to Qurbani Mart");
    
          setForm({
            name: "",
            email: "",
            image: "",
            password:"",
          });
    
          setLoading(false);
        }, 1000);
      };
    
    

  const handlegoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* card */}
      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-black shadow-xl rounded-2xl p-8">

        {/* title */}
        <h1 className="text-2xl font-bold text-center text-green-900 mb-2">
          Create Account
        </h1>

        <p className="text-center text-xl text-white mb-6">
          <span className="text-green-900">Qurbani</span> Mart
        </p>

        <form className="space-y-5 " onSubmit={handleSubmit(handlereg)}>


          {/* NAME */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
            {...register("name", { required: true })}
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
            {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border outline-none"
            />
          </div>

          {/* PHOTO */}
          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-500" />
            <input
            {...register("image", { required: true })}
              type="text"
              placeholder="Photo URL"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border outline-none"
            />
          </div>

          {/* PASSWORD */}
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
            
            className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-700 font-medium transition"
          >
            Register
          </button>

          {/* link */}
          <p className="text-center text-sm text-green-900 mt-3 font-bold">
            Already have an account?{" "}
            <Link href="/Login" className="underline text-black">
              Login
            </Link>
          </p>

        </form>

         <p className="text-center font-bold text-black">OR</p>
        
                <div className="flex gap-4">
                  <button
                    onClick={handlegoogle}
                    type="button"
                    className="flex-1 flex items-center justify-center rounded-lg gap-2 bg-green-900 hover:bg-green-700 text-white py-2  transition active:scale-95 shadow-sm font-medium"
                  >
                    <FaGoogle className="text-white" />
                    Continue with Google
                  </button>
                </div>
        
      </div>

      
    </div>
  );
};

export default Register;