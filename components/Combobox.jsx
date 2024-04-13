"use client";
import React from "react";
import { useState, useContext } from "react";
import { FilterDispatch } from "@/context/Context";
import { v4 as uuid } from "uuid";

const list = [
  "Comedy",
  "Tragedy",
  "Drama",
  "Horror",
  "Romance",
  "Fantasy",
  "Slice of Life",
  "Shounen",
  "Shoujo",
];

export default function Combobox() {
  const dispatch = useContext(FilterDispatch);
  const [isOpen, setOpen] = useState(false);
  const [genreList, setGenreList] = useState(list);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="relative">
      <button
        id="genre-btn"
        onBlur={() => {
          let fn = e => {
            if (e.target.nodeName !== "LI" && e.target.nodeName !== "INPUT") {
              setOpen(false);
              setGenreList(list);
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
        <img src="/Chevron Down.png" alt="" />
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
            value={searchValue}
            onInput={e => {
              const searchKey = e.target.value;
              setSearchValue(searchKey);
              const newGenreList = list.filter(genre =>
                genre.toLowerCase().startsWith(searchKey.toLowerCase())
              );
              setGenreList(newGenreList);
            }}
          />
          {genreList.map(genre => (
            <li
              key={uuid()}
              className="hover:bg-[#F6F6F6] cursor-pointer hover:rounded-md px-4 py-2"
              onClick={() => {
                setGenreList(list);
                setSearchValue("");
                dispatch({ type: "FilterGenre", newGenre: genre });
              }}
            >
              {genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
