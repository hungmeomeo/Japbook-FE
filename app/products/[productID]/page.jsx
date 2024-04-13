"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tag
} from "@chakra-ui/react";

import React, { useState } from "react";

const page = () => {
  const [qty, setQty] = useState(1);
  return (
    <>
      <main className="responsive-layout mt-6">
        <p className="text-gray-600 font-medium">
          Ecommerce &gt;{" "}
          <span className="text-black">product name goes here</span>
        </p>
        <section className="flex gap-40 mt-10">
          <Carousel className="w-1/4 h-[400px] bg-gray-200">
            <CarouselContent>
              <CarouselItem>Item 1</CarouselItem>
              <CarouselItem>Item 2</CarouselItem>
              <CarouselItem>Item 3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="">
            <h1 className="font-bold text-4xl">Product name</h1>
            <Tag borderRadius={100} variant="outline" color="black" size="md" mt={2}>
              Instock/outstock
            </Tag>
            <p className="font-semibold text-xl mt-5">$100</p>
            <p className="text-gray-600 font-medium mt-10">QUANTITY</p>
            <div className="flex border-2 w-fit items-center rounded-md mt-2">
              <button
                onClick={() => {
                  setQty(old => (old - 1 >= 1 ? old - 1 : old));
                }}
                className="px-4 py-2 rounded-s-sm active:bg-gray-300"
              >
                -
              </button>
              <input className="outline-none w-6" name="qty" type="number" value={qty} onChange={(e) => {setQty(Number(e.target.value))}}/>
              <button
                onClick={() => {
                  setQty(old => old + 1);
                }}
                className="px-4 py-2 rounded-e-sm active:bg-gray-300"
              >
                +
              </button>
            </div>
            <button className="text-white bg-black px-24 py-3 rounded-lg mt-20">Add to cart</button>
          </div>
        </section>

        <section className="my-20">
          <h2 className="font-semibold text-2xl">You might also like</h2>
          <p className="text-gray-600">SIMILAR PRODUCT</p>
          <div className="flex justify-between mt-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>
      </main>
      <Footer bgColor={"#F6F6F6"} />
    </>
  );
};

export default page;
