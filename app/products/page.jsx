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
import React, { useEffect, useReducer, useState } from "react";
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
import { be_url, web_link } from "@/config_var";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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

const totalProduct = 84;

const Products = () => {
  const searchParams = useSearchParams();
  const [filter, dispatch] = useReducer(filterReducer, {
    bookType: "",
    genre: [],
    priceRange: [],
  });
  const [sort, setSort] = useState({ kind: "name", order: "asc" }); // Kind: name | price, order: asc | desc
  const [productList, setProductList] = useState()
  const productPerPage = 12
  const page = parseInt(searchParams.get("page"));
  const finalPage = Math.ceil(totalProduct/productPerPage)
  console.log(page);
  let mergeArray = [];
  if (filter.bookType === "") {
    mergeArray = filter.genre;
  } else {
    mergeArray = [filter.bookType].concat(filter.genre);
  }

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const fetchAllProducts = await axios.get(`${be_url}/`)
        setProductList(fetchAllProducts.data)
      } catch(e) {
        console.log(e)
      }
    }
    getAllProducts()
  }, [])

  return (
    <FilterDispatch.Provider value={dispatch}>
      <Navigation path={["Ecommerce", "Products"]} bgColor={"#F6F6F6"} />
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
            {productList && productList.map(book => (
              <div key={uuid()} className="flex justify-center">
                <Card
                  productId={book.id}
                  productName={book.name}
                  isInStock={book.status}
                  price={book.price}
                  imgUrl={book.image}
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
              {/*Always have first page*/}
              <PaginationItem>
                <PaginationLink
                  href={`${web_link}/products?page=1`}
                  isActive={page == 1 ? true : false}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              {/*First ellipsis appears only when current page is greater than or equal to 4 */}
              {page >= 4 && finalPage > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {((page < 4 && finalPage > 5) || (finalPage <=5)) && (
                <>
                  {finalPage > 2 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=2`}
                        isActive={page == 2 ? true : false}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {finalPage > 3 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=3`}
                        isActive={page == 3 ? true : false}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {finalPage > 4 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=4`}
                        isActive={page == 4 ? true : false}
                      >
                        4
                      </PaginationLink>
                    </PaginationItem>
                  )}
                </>
              )}
              {page + 2 < finalPage && finalPage > 5 && (
                <>
                  {page >= 4 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=${page - 1}`}
                      >
                        {page - 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {page >= 4 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=${page}`}
                        isActive
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {page >= 4 && (
                    <PaginationItem>
                      <PaginationLink
                        href={`${web_link}/products?page=${page + 1}`}
                      >
                        {page + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                </>
              )}

              {finalPage - 3 > 1 && page + 2 >= finalPage && finalPage > 5 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href={`${web_link}/products?page=${finalPage - 3}`}
                      isActive={page == finalPage - 3 ? true : false}
                    >
                      {finalPage - 3}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`${web_link}/products?page=${finalPage - 2}`}
                      isActive={page == finalPage - 2 ? true : false}
                    >
                      {finalPage - 2}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`${web_link}/products?page=${finalPage - 1}`}
                      isActive={page == finalPage - 1 ? true : false}
                    >
                      {finalPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              {/*Second ellipsis appears only when current page + 3 is smaller than the final page */}
              {page + 2 < finalPage && finalPage > 5 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {/*final page only exist if products cannot fit inside one page*/}
              {finalPage > 1 && (
                <PaginationItem>
                  <PaginationLink
                    href={`${web_link}/products?page=${finalPage}`}
                    isActive={page == finalPage ? true : false}
                  >
                    {finalPage}
                  </PaginationLink>
                </PaginationItem>
              )}

              {/* Next Button */}
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
