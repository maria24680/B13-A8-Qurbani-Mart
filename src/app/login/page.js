// app/login/page.js
"use client";
import toast from "react-hot-toast";

export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Login Successful ✅");
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>

      <input className="w-full border p-2" placeholder="Email" />
      <input className="w-full border p-2" type="password" placeholder="Password" />

      <button className="w-full bg-green-600 text-white py-2">
        Login
      </button>
    </form>
  );
}