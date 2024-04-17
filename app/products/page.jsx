"use client";

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
import BookData from "@/fakeData";
import React, { useReducer, useState } from "react";
import Card from "@/components/Card";
import { v4 as uuid } from "uuid";
import { FilterDispatch } from "@/context/Context";
import Footer from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { web_link } from "@/config_var";
import { useSearchParams } from "next/navigation";

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
  }
};

const totalProduct = 400;

const Products = () => {
  const searchParams = useSearchParams();
  const [filter, dispatch] = useReducer(filterReducer, {
    bookType: "",
    genre: [],
    priceRange: [],
  });
  const [sort, setSort] = useState({ kind: "name", order: "asc" }); // Kind: name | price, order: asc | desc
  const page = parseInt(searchParams.get("page"));
  console.log(page);
  let mergeArray = [];
  if (filter.bookType === "") {
    mergeArray = filter.genre;
  } else {
    mergeArray = [filter.bookType].concat(filter.genre);
  }
  return (
    <FilterDispatch.Provider value={dispatch}>
      <Navigation path={["Ecommerce", "Products"]} />
      <section className="responsive-layout my-10 flex gap-4">
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
                <TagCloseButton
                  onClick={() => {
                    dispatch({ type: "RemoveTag", name: ele });
                  }}
                />
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
                <TagCloseButton
                  onClick={() => {
                    dispatch({ type: "RemovePriceRange" });
                  }}
                />
              </Tag>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>Showing x-y of z results</p>
            <Select
              onValueChange={e => {
                switch (e) {
                  case "name-asc":
                    setSort({ kind: "name", order: "asc" });
                    break;
                  case "name-desc":
                    setSort({ kind: "name", order: "desc" });
                    break;
                  case "price-asc":
                    setSort({ kind: "price", order: "asc" });
                    break;
                  case "price-desc":
                    setSort({ kind: "price", order: "desc" });
                    break;
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="SORT BY" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">{"Name (A-Z)"}</SelectItem>
                <SelectItem value="name-desc">{"Name (Z-A)"}</SelectItem>
                <SelectItem value="price-asc">
                  {"Price (low - high)"}
                </SelectItem>
                <SelectItem value="price-desc">
                  {"Price (high - low)"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {BookData.map(book => (
              <div key={book.productId} className="flex justify-center">
                <Card
                  productId={book.productId}
                  productName={book.productName}
                  isInStock={book.isInStock}
                  price={book.productPrice}
                  imgUrl={book.imgUrl}
                />
              </div>
            ))}
          </div>
          <Pagination className="mt-5">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`${web_link}/products?page=${
                    page > 1 ? page - 1 : page
                  }`}
                />
              </PaginationItem>

              {page >= 4 && (
                <>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationLink href="#" isActive>
                  {page}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">{page + 1}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">{page + 2}</PaginationLink>
              </PaginationItem>

              {page < Math.ceil(totalProduct / 12) - 3 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink href="#">
                  {Math.ceil(totalProduct / 12)}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href={`${web_link}/products?page=${
                    page * 12 > totalProduct ? page : page + 1
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </section>
      <Footer bgColor={"#F6F6F6"} />
    </FilterDispatch.Provider>
  );
};

export default Products;
