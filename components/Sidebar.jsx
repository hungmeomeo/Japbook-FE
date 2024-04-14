'use client'

import React from "react";

const Sidebar = ({ children, navItem, setNavItem }) => {
  return (
    <div className="responsive-layout flex mt-16 h-[400px]">
      <aside className="flex flex-col gap-4 pr-10 border-r-2 self-stretch justify-center">
        <div
          onClick={() => {
            setNavItem("Wishlist");
          }}
          className={`flex items-center font-medium gap-1 px-10 py-3 cursor-pointer text-[#5C5F6A] ${
            navItem == "Wishlist" && " bg-[#F6F6F6] rounded-lg text-black"
          }`}
        >
          <img src="/Heart.png" alt="" />
          Wishlist
        </div>
        <div
          onClick={() => {
            setNavItem("Addr");
          }}
          className={`flex items-center font-medium gap-1 px-10 py-3 cursor-pointer text-[#5C5F6A] ${
            navItem == "Addr" && " bg-[#F6F6F6] rounded-lg text-black"
          }`}
        >
          <img src="/Delivery.png" alt="" />
          Address
        </div>
        <div
          onClick={() => {
            setNavItem("Pass");
          }}
          className={`flex items-center font-medium gap-1 px-10 py-3 cursor-pointer text-[#5C5F6A] ${
            navItem == "Pass" && " bg-[#F6F6F6] rounded-lg text-black"
          }`}
        >
          <img src="/Key.png" alt="" />
          Password
        </div>
        <div
          onClick={() => {
            setNavItem("Detail");
          }}
          className={`flex items-center font-medium gap-1 px-10 py-3 cursor-pointer text-[#5C5F6A] ${
            navItem == "Detail" && " bg-[#F6F6F6] rounded-lg text-black"
          }`}
        >
          <img src="/ProfileUser.png" alt="" />
          Account Detail
        </div>
        <div
          onClick={() => {
            setNavItem("Logout");
          }}
          className={`flex items-center font-medium gap-1 px-10 py-3 cursor-pointer text-[#5C5F6A] ${
            navItem == "Logout" && " bg-[#F6F6F6] rounded-lg text-black"
          }`}
        >
          <img src="/Logout.png" alt="" />
          Logout
        </div>
      </aside>
      {children}
    </div>
  );
};

export default Sidebar;
