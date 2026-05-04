"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlelogin = async (data) => {
    const { email, password } = data;

    if (!email || !password) {
      toast.warning("Please fill all fields!");
      return;
    }

    try {
      const { data: res, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/?login=success",
      });

      if (error) {
        toast.error(error.message || "Login failed!");
        return;
      }

      toast.success("Welcome to Qurbani Mart", {
  autoClose: 5000,
});
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  const handlegoogle = async () => {
    try {
     toast.info("Redirecting to Google...");
await authClient.signIn.social({
  provider: "google",
});
    } catch (err) {
      toast.error("Google login failed!");
      
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Toast container MUST */}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-md bg-transparent backdrop-blur-md border border-black shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Login to <span className="text-green-900">Qurbani</span> <span className="text-black">Mart</span>
        </h1>

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

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-700 font-medium transition-all"
          >
            Login
          </button>

          <p className="text-center text-sm text-green-900 mt-3 font-bold">
            Don&apos;t have an account?{" "}
            <Link href="/Register" className="underline text-black">
              Sign up
            </Link>
          </p>
        </form>

        <p className="text-center font-bold text-black">OR</p>

        <button
          onClick={handlegoogle}
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-green-900 hover:bg-green-700 text-white py-2 rounded-lg transition-all active:scale-95 font-medium cursor-pointer"
        >
          <FaGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;