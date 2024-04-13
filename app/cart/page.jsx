import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";
import { Divider } from "@chakra-ui/react";
import SummaryProduct from "@/components/SummaryProduct";

const Cart = () => {
    
  return (
    <>
      <Navigation path="Cart" />
      <main className="responsive-layout mt-24 flex justify-between mb-40">
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
          <button className="w-full text-white bg-black py-3 rounded-md font-medium">Checkout</button>
        </section>
      </main>
      <Footer bgColor="#F6F6F6" />
    </>
  );
};

export default Cart;
