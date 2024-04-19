'use client'

import React, { useReducer } from "react";
import { FilterDispatch, FilterState } from "@/context/Context";

const filterReducer = (filter, action) => {
  switch (action.type) {
    case "FilterBookType": {
      return {
        genre: [...filter.genre],
        priceRange: [...filter.priceRange],
        bookType: action.bookType,
      };
    }
    case "FilterGenre": {
      const oldGenreFilter = filter.genre;
      if (oldGenreFilter.indexOf(action.newGenre) == -1)
        oldGenreFilter.push(action.newGenre);
      return {
        ...filter,
        priceRange: [...filter.priceRange],
        genre: [...oldGenreFilter],
      };
    }
    case "FilterPrice": {
      return {
        ...filter,
        genre: [...filter.genre],
        priceRange: action.priceRange,
      };
    }
    case "RemovePriceRange": {
      return {
        ...filter,
        genre: [...filter.genre],
        priceRange: [],
      };
    }
    case "RemoveTag": {
      if (filter.bookType === action.name) {
        return {
          bookType: "",
          genre: [...filter.genre],
          priceRange: [...filter.priceRange],
        };
      } else {
        return {
          ...filter,
          priceRange: [...filter.priceRange],
          genre: filter.genre.filter(ele => ele !== action.name),
        };
      }
    }
    case "SearchBookName": {
        console.log("Inside dispatch SearchBookName")
      return {
        genre: [...filter.genre],
        priceRange: [...filter.priceRange],
        bookType: action.bookType,
        name: action.bookName
      };
    }
  }
};

const FilterProvider = ({ children }) => {
  const [filter, dispatch] = useReducer(filterReducer, {
    name: "",
    genre: [],
    priceRange: [],
  });
  return (
    <FilterDispatch.Provider value={dispatch}>
      <FilterState.Provider value={filter}>{children}</FilterState.Provider>
    </FilterDispatch.Provider>
  );
};

export default FilterProvider;
