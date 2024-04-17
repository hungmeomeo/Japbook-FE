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
import cartList from "@/cart";
import { Tag } from "@chakra-ui/react";
import BookData from "@/fakeData";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Review from "@/components/Review";

const page = ({ params }) => {
  const [qty, setQty] = useState(1);
  const productId = params.productID;
  const product = BookData[productId - 1];
  const cartProduct = {
    imgUrl: product?.imgUrl,
    id: product?.productId,
    name: product?.productName,
    price: product?.productPrice,
    quantity: qty,
  };
  console.log(cartProduct);
  return (
    <>
      <main className="responsive-layout mt-6">
        <p className="text-gray-600 font-medium">
          Ecommerce &gt;{" "}
          <span className="text-black">{product?.productName}</span>
        </p>
        <section className="flex gap-40 mt-10">
          <div className="w-1/3 bg-yellow-50">
            <img src={product?.imgUrl} alt="" className="w-full" />
          </div>
          <div className="">
            <h1 className="font-bold text-4xl">{product?.productName}</h1>
            <Tag
              borderRadius={100}
              variant="outline"
              color="black"
              size="md"
              mt={2}
            >
              {product?.isInStock ? "INSTOCK" : "OUTSTOCK"}
            </Tag>
            <div className="mt-6">
              <p className="font-semibold text-xl text-gray-600">Genre</p>
              <div className="flex gap-4">
                <Tag
                  borderRadius={100}
                  variant="outline"
                  color="black"
                  size="md"
                  mt={2}
                >
                  {"Fantasy"}
                </Tag>
                <Tag
                  borderRadius={100}
                  variant="outline"
                  color="black"
                  size="md"
                  mt={2}
                >
                  {"Fantasy"}
                </Tag>
              </div>
            </div>
            <p className="font-semibold text-xl mt-10">
              ${product?.productPrice}
            </p>
            <p className="text-gray-600 font-semibold mt-10">QUANTITY</p>
            <div className="flex border-2 w-fit items-center rounded-md mt-2">
              <button
                onClick={() => {
                  setQty(old => (old - 1 >= 1 ? old - 1 : old));
                }}
                className="px-4 py-2 rounded-s-sm active:bg-gray-300"
              >
                -
              </button>
              <input
                className="outline-none w-6"
                name="qty"
                type="number"
                value={qty}
                onChange={e => {
                  setQty(Number(e.target.value));
                }}
              />
              <button
                onClick={() => {
                  setQty(old => old + 1);
                }}
                className="px-4 py-2 rounded-e-sm active:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                let res = cartList.findIndex((product) => product.id == cartProduct.id)
                if (res == -1) {
                  cartList.push(cartProduct)
                  alert("Add to cart successfully")
                  console.log(cartList)
                }
                else {
                  // Only update if there is change in quantity
                  if (cartList[res].quantity != cartProduct.quantity) {
                    cartList[res].quantity = cartProduct.quantity
                    alert("Update cart successfully")
                    console.log(cartList)
                  }
                }
              }}
              className="text-white bg-black px-24 py-3 rounded-lg mt-20"
            >
              Add to cart
            </button>
          </div>
        </section>
        <Review/>
        <section className="my-20">
          <h2 className="font-semibold text-2xl">You might also like</h2>
          <p className="text-gray-600">SIMILAR PRODUCT</p>
          <div className="flex justify-between mt-4">
            {[3, 7, 10, 17].map(idx => (
              <Card
                key={uuid()}
                productId={BookData[idx].productId}
                productName={BookData[idx].productName}
                price={BookData[idx].productPrice}
                isInStock={BookData[idx].isInStock}
                imgUrl={BookData[idx].imgUrl}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer bgColor={"#F6F6F6"} />
    </>
  );
};

export default page;
