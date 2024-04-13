import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <Navigation path="Login" />
        <button className="flex text-[#5C5F6A] border-2 py-2 w-1/4 rounded-md justify-center mt-10">
          <div className="flex gap-2">
            <img src="/Google.png" alt="" />
            <p>Continue with Google</p>
          </div>
        </button>
        <p className="text-[#5C5F6A] text-xs font-medium my-6">OR</p>
        <form action="" className="w-1/4 flex flex-col">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="outline-none border-2 focus:border-[#5C5F6A] px-2 rounded-md py-2"
          />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="outline-none border-2 focus:border-[#5C5F6A] px-2 rounded-md py-2"
          />
          <a
            href=""
            className="text-[#5C5F6A] text-sm ml-auto my-4 font-semibold"
          >
            Forgot Password?
          </a>
          <button className="bg-black text-white font-semibold rounded-md py-2">
            Login
          </button>
        </form>
        <p className="text-[#5C5F6A] mt-4">
          Don't have an account?{" "}
          <span>
            <a href="" className="hover:underline">
              Sign Up
            </a>
          </span>
        </p>
      </div>
      <Footer bgColor="#F6F6F6"/>
    </>
  );
};

export default Login;
