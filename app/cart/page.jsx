"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { Divider } from "@chakra-ui/react";
import SummaryProduct from "@/components/SummaryProduct";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const Cart = () => {
  // cart or ship
  const [orderState, setOrderState] = useState("cart");
  return (
    <>
      <Navigation path={["Ecommerce", "Cart"]} />
      <main className="responsive-layout mt-24 flex justify-between mb-40">
        {orderState == "cart" ? (
          <section className="w-fit">
            <h3 className="font-semibold text-lg">Your cart</h3>
            <Divider />
            <ul className="flex flex-col gap-4 mt-4 h-96 overflow-y-scroll">
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
              <SummaryProduct />
            </ul>
          </section>
        ) : (
          <section>
            <h3 className="font-semibold text-lg">Shipping Address</h3>
            <form action="" className="w-[600px] mt-6">
              <FormControl>
                <FormLabel>Street Address</FormLabel>
                <Input placeholder="" />
              </FormControl>
              <div className="flex gap-2 w-full mt-4">
                <FormControl className="w-[300px]">
                  <FormLabel>City</FormLabel>
                  <Input placeholder="" />
                </FormControl>
                <FormControl className="w-1/4">
                  <FormLabel>District</FormLabel>
                  <Input placeholder="" />
                </FormControl>
                <FormControl className="w-1/4">
                  <FormLabel>Ward</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </div>
              <div className="flex gap-2 w-full mt-4">
                <FormControl className="w-[300px]">
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="" type="email" />
                </FormControl>
                <FormControl className="w-1/4">
                  <FormLabel>Fullname</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </div>
            </form>
          </section>
        )}

        <section className="border-2 p-4 h-fit rounded-lg w-96">
          <h3 className="font-semibold text-lg">Order Summary</h3>
          <div className="flex justify-between mt-8">
            <p className="text-[#5C5F6A] font-medium">Subtotal:</p>
            <p className="font-semibold">$123</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#5C5F6A] font-medium">Shipping:</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="text-[#5C5F6A] font-medium">Tax:</p>
            <p className="font-semibold">$123</p>
          </div>
          <Divider />
          <div className="flex justify-between my-4">
            <p className="text-[#5C5F6A] font-medium">Total</p>
            <p className="font-semibold">$123</p>
          </div>
          <button
            onClick={() => {
              setOrderState("ship");
            }}
            className="w-full text-white bg-black py-3 rounded-md font-medium"
          >
            {orderState == "cart" ? "Checkout" : "Place Order"}
          </button>

          <a
            onClick={() => {
              if (orderState == "ship") {
                setOrderState("cart");
              }
            }}
            className="mt-4 block hover:underline font-medium text-center my-auto cursor-pointer"
          >
            {orderState == "cart" ? "Continue Shopping" : "Edit Cart"}
          </a>
        </section>
      </main>
      <Footer bgColor="#F6F6F6" />
    </>
  );
};

export default Cart;
