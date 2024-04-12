import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex items-center py-5 xl:px-40 lg:px-24 md:px-10">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <img src="/logo.png" alt="" />
        JapBook
      </div>
      <ul className="flex pl-32 font-medium gap-6 grow text-[#5C5F6A]">
        <li className="cursor-pointer">Home</li>
        <li className="flex cursor-pointer">
          Category
          <img src="/Chevron Down.png" alt="chevron-down" />
        </li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center gap-4">
        <form className="flex border-2 px-2 py-1 rounded-md has-[:focus]:border-[#878A92]">
          <img src="/magnifier.png" alt="search-icon" />
          <input
            type="text"
            placeholder="Search products"
            className="pl-2 outline-none "
          />
        </form>
        <div>
          <img src="/shopping cart.png" alt="shopping cart" />
        </div>
        <div>
          <img src="/user.png" alt="user" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar