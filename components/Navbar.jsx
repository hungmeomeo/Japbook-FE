"use client";

import React, { useState } from "react";
import { web_link } from "@/config_var";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [searchBook, setSearchBook] = useState("");
  console.log(searchBook);
  return (
    <nav className="flex items-center py-5 xl:px-40 lg:px-24 md:px-10 shadow-md">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <img src="/logo.png" alt="" />
        JapBook
      </div>
      <ul className="flex pl-32 font-medium gap-6 grow text-[#5C5F6A]">
        <li className="cursor-pointer">
          <a href={`${web_link}/`}>Home</a>
        </li>
        <li className="flex cursor-pointer">
          <a href={`${web_link}/products?page=1`}>Products</a>
        </li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center gap-2">
        <form
          onSubmit={e => {
            e.preventDefault()
            router.push(`${web_link}/products?name=${searchBook}`)
          }}
          className="flex border-2 px-2 py-1 rounded-md has-[:focus]:border-[#878A92]"
        >
          <img src="/magnifier.png" alt="search-icon" />
          <input
            type="text"
            placeholder="Search products"
            className="pl-2 outline-none "
            onChange={e => {
              setSearchBook(e.target.value);
            }}
          />
        </form>
        <div
          onClick={() => router.push("/cart")}
          className="hover:bg-[#F6F6F6] w-10 h-10 flex justify-center items-center rounded-full"
        >
          <img src="/shopping cart.png" alt="shopping cart" />
        </div>
        <div
          onClick={() => router.push("/profile")}
          className="hover:bg-[#F6F6F6] w-10 h-10 flex justify-center items-center rounded-full"
        >
          <img src="/user.png" alt="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
