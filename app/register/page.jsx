import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";
import { web_link } from "@/config_var";

const Register = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <Navigation path={["Ecommerce", "Sign up"]} />
        <button className="flex text-[#5C5F6A] border-2 py-2 w-1/4 rounded-md justify-center mt-10">
          <div className="flex gap-2">
            <img src="/Google.png" alt="" />
            <p>Continue with Google</p>
          </div>
        </button>
        <p className="text-[#5C5F6A] text-xs font-medium my-6">OR</p>
        <form action="" className="w-1/4 flex flex-col">
          <label htmlFor="email" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="outline-none border-2 focus:border-[#5C5F6A] px-2 rounded-md py-2"
          />
          <label htmlFor="email" className="mt-4">
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
          <button className="bg-black text-white font-semibold rounded-md py-2 mt-8">
            Create Account
          </button>
        </form>
        <p className="text-[#5C5F6A] mt-4">
          Already have an account?{" "}
          <span>
            <a href={`${web_link}/login`} className="hover:underline">
                Login
            </a>
          </span>
        </p>
      </div>
      <Footer bgColor="#F6F6F6" />
    </>
  );
};

export default Register;
