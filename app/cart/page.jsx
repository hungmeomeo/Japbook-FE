"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";
import { Divider } from "@chakra-ui/react";
import SummaryProduct from "@/components/SummaryProduct";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";
import { be_url, web_link } from "@/config_var";
import { getUserId } from "@/authentication";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const Cart = () => {
  // cart or ship
  const router = useRouter()
  const [orderState, setOrderState] = useState("cart");
  const [cartList, setCartList] = useState([]);
  const [updateCart, setUpdateCart] = useState(1)
  const [customerInfo, setCustomerInfo] = useState(null)
  let totalPrice = 0;
  for (let product of cartList) {
    totalPrice += product.product.price * product.quantity;
  }
  let shippingFee = totalPrice > 500000 ? 0 : 15000;
  let tax = Math.round(totalPrice * 0.07);
  useEffect(() => {
    const getCartList = async () => {
      try {
        const uid = await getUserId();
        const getCart = await axios.get(`${be_url}/user/${uid}`);
        setCartList(getCart.data.cart);
      } catch (e) {
        console.log(e);
      }
    };
    getCartList();

    const getCustomerInfo = async () => {
      try {
        const uid = await getUserId();
        const fetchCustomerInfo = await axios.get(`${be_url}/user/${uid}/shipping`)
        console.log(fetchCustomerInfo.data)
        fetchCustomerInfo.data.length && setCustomerInfo(fetchCustomerInfo.data[0])
      }
      catch (e) {
        console.log(e)
      }
    }

    getCustomerInfo()
  }, [updateCart]);
  
  return (
    <>
      <Navigation path={["Ecommerce", "Cart"]} bgColor={"#F6F6F6"} />
      <main className="responsive-layout mt-24 gap-10 flex flex-col lg:flex-row justify-between mb-40 w-full">
        {orderState == "cart" ? (
          <section className="lg:w-3/5">
            <h3 className="font-semibold text-lg">Your cart</h3>
            <Divider />
            <ul className="flex flex-col gap-4 mt-4 h-96 overflow-y-scroll w-full">
              {cartList &&
                cartList.map(product => {
                  return (
                    <SummaryProduct
                      key={product.product._id}
                      productInfo={product}
                      updateCart={setUpdateCart}
                    />
                  );
                })}
            </ul>
          </section>
        ) : (
          <section>
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="font-semibold text-lg">Shipping Address</h3>
              <p className="text-gray-500">
                Can't see all information, update{" "}
                <a
                  href={`${web_link}/profile`}
                  className="text-black hover:underline"
                >
                  here
                </a>
              </p>
            </div>
            <form action="" className="w-full mt-6">
              <FormControl>
                <FormLabel>Street Address</FormLabel>
                <Input value={customerInfo && customerInfo.address} disabled />
              </FormControl>
              <div className="flex flex-col md:flex-row gap-2 w-full mt-4">
                <FormControl className="w-[300px]">
                  <FormLabel>City</FormLabel>
                  <Input
                    value={customerInfo && customerInfo.city}
                    placeholder=""
                    disabled
                  />
                </FormControl>
                <FormControl className="w-[300px]">
                  <FormLabel>District</FormLabel>
                  <Input
                    value={customerInfo && customerInfo.district}
                    disabled
                  />
                </FormControl>
                <FormControl className="w-[300px]">
                  <FormLabel>Ward</FormLabel>
                  <Input value={customerInfo && customerInfo.ward} disabled />
                </FormControl>
              </div>
              <FormControl className="mt-6">
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={customerInfo && customerInfo.ship_phone}
                  disabled
                />
              </FormControl>
            </form>
          </section>
        )}

        <section className="border-2 p-4 h-fit mt-4 lg:mt-0 rounded-lg xl:w-[400px] lg:w-[360px]">
          <h3 className="font-semibold text-lg">Order Summary</h3>
          <div className="flex justify-between mt-8">
            <p className="text-[#5C5F6A] font-medium">Subtotal:</p>
            <p className="font-semibold">{totalPrice} đ</p>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#5C5F6A] font-medium">Shipping:</p>
            <p className="font-semibold">{shippingFee} đ</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="text-[#5C5F6A] font-medium">Tax:</p>
            <p className="font-semibold">{tax} đ</p>
          </div>
          <Divider />
          <div className="flex justify-between my-4">
            <p className="text-[#5C5F6A] font-medium">Total</p>
            <p className="font-semibold">{totalPrice + shippingFee + tax} đ</p>
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
              } else {
                router.push("/products");
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
