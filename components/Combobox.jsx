"use client";
import React from "react";
import { useState } from "react";

export default function Combobox() {
  const width = "360px";
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        id="genre-btn"
        onBlur={() => {
          let fn = e => {
            console.log(e);
            if (e.target.nodeName !== "LI" && e.target.nodeName !== "INPUT") {
              console.log("You click ", e.target.nodeName);
              setOpen(false);
              document.removeEventListener("click", fn);
            }
          };
          document.addEventListener("click", fn);
        }}
        onClick={() => {
          setOpen(old => !old);
        }}
        className={`border-[1px] px-3 py-2 rounded-md text-sm flex items-center justify-between w-full`}
      >
        Choose Your Genre
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down h-4 w-4 opacity-50"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      {isOpen && (
        <ul
          className={`border-[1px] mt-[3px] rounded-md px-1 w-full max-h-44 overflow-y-scroll overflow-x-hidden absolute z-50 bg-white`}
        >
          <input
            autoFocus
            placeholder="Search genre"
            type="text"
            className="outline-none px-2 py-3 sticky top-0"
          />
          <li
            onClick={() => {
              console.log("list 1 is clicked");
            }}
            className="hover:bg-[#F6F6F6] hover:rounded-md px-4 py-2 z-50"
          >
            list1
          </li>
          <li
            onClick={() => {
              console.log("list 1 is clicked");
            }}
            className="hover:bg-[#F6F6F6] hover:rounded-md px-4 py-2"
          >
            list1
          </li>
          <li
            onClick={() => {
              console.log("list 1 is clicked");
            }}
            className="hover:bg-[#F6F6F6] hover:rounded-md px-4 py-2"
          >
            list1
          </li>
          <li
            onClick={() => {
              console.log("list 1 is clicked");
            }}
            className="hover:bg-[#F6F6F6] hover:rounded-md px-4 py-2"
          >
            list1
          </li>
          <li
            onClick={() => {
              console.log("list 1 is clicked");
            }}
            className="hover:bg-[#F6F6F6] hover:rounded-md px-4 py-2"
          >
            list1
          </li>
        </ul>
      )}
    </div>
  );
}
