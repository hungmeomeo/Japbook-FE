'use client'

import Filter from "@/components/Filter";
import Navigation from "@/components/Navigation";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookData from "@/fakeData"
import React, {useReducer} from "react";
import Card from "@/components/Card";
import {v4 as uuid} from "uuid"
import { FilterDispatch } from "@/context/Context";

const filterReducer = (filter, action) => {
  switch (action.type) {
    case "FilterBookType": {
      return {
        genre: [...filter.genre],
        priceRange: [...filter.priceRange],
        bookType: action.bookType
      }
    }
    case "FilterGenre": {
      const oldGenreFilter = filter.genre 
      if (oldGenreFilter.indexOf(action.newGenre) == -1)
        oldGenreFilter.push(action.newGenre)
      return {
        ...filter,
        priceRange: [...filter.priceRange],
        genre: [...oldGenreFilter]
      }
    }
    case "FilterPrice": {
      return {
        ...filter,
        genre: [...filter.genre],
        priceRange: action.priceRange
      }
    }
    case "RemovePriceRange": {
      return {
        ...filter,
        genre: [...filter.genre],
        priceRange: []
      }
    }
    case "RemoveTag": {
      if (filter.bookType === action.name) {
        return {
          bookType: "",
          genre: [...filter.genre],
          priceRange: [...filter.priceRange]
        }
      }
      else {
        return {
          ...filter,
          priceRange: [...filter.priceRange],
          genre: filter.genre.filter(ele => ele !== action.name)
        }
      }
    }
  } 
}

const Products = () => {
  const [filter, dispatch] = useReducer(filterReducer, {bookType: "", genre: [], priceRange: []})
  // console.log(filter)
  let mergeArray = []
  if (filter.bookType === "") {
    mergeArray = filter.genre
  } 
  else {
    mergeArray = [filter.bookType].concat(filter.genre)
  }
  return (
    <FilterDispatch.Provider value={dispatch}>
      <Navigation path={["Ecommerce", "Products"]} />
      <section className="responsive-layout mt-6 flex gap-4">
        <Filter />
        <main className="grow">
          <p className="font-semibold">Applied Filters:</p>
          <div className="w-full flex flex-wrap gap-2 mt-4">
            {mergeArray.map(ele => (
              <Tag
                key={uuid()}
                borderRadius="full"
                variant="outline"
                colorScheme="gray"
                size="lg"
              >
                <TagLabel className="text-black">{ele}</TagLabel>
                <TagCloseButton onClick={() => {dispatch({type: "RemoveTag", name: ele})}}/>
              </Tag>
            ))}
            {filter.priceRange.length > 0 && (
              <Tag
                key={uuid()}
                borderRadius="full"
                variant="outline"
                colorScheme="gray"
                size="lg"
              >
                <TagLabel className="text-black">{`From \$${filter.priceRange[0]} to \$${filter.priceRange[1]}`}</TagLabel>
                <TagCloseButton onClick={() => {dispatch({type: "RemovePriceRange"})}}/>
              </Tag>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>Showing x-y of z results</p>
            <Select
              onValueChange={e => {
                alert(e);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="SORT BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">{"Name (Ascending)"}</SelectItem>
                <SelectItem value="name-desc">{"Name (Descending)"}</SelectItem>
                <SelectItem value="price-asc">{"Price (Ascending)"}</SelectItem>
                <SelectItem value="price-desc">
                  {"Price (Descending)"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {BookData.map(book => (
              <div key={book.productId} className="flex justify-center">
                <Card productId={book.productId} productName={book.productName} isInStock={book.isInStock} price={book.productPrice} imgUrl={book.imgUrl} />
              </div>
            ))}
          </div>
        </main>
      </section>
    </FilterDispatch.Provider>
  );
};

export default Products;
