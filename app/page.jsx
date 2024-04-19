"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { web_link, be_url } from "@/config_var";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserToken } from "@/authentication";

const HomePage = () => {
  const [bookStatus, setBookStatus] = useState("Latest"); // Featured | Latest
  const [bookList, setBookList] = useState()
  useEffect(() => {
    const fetchData = async () => {   
      try { 
        const userToken = await getUserToken()
        const response = await axios.get(`${be_url}/home`);
        setBookList(response.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <section className="responsive-layout bg-[url('/welcome_img.jpg')] py-10 bg-cover md:bg-none md:bg-[#F6F6F6] flex md:justify-between md:items-center md:py-20">
        <div className="brightness-100">
          <h1 className="text-5xl font-bold text-black">
            Fresh Arrivals Today
          </h1>
          <p className="mt-5 font-medium">
            Discover Our Newest Collection Today.
          </p>
          <a
            href={`${web_link}/products`}
            className="group bg-black text-white flex px-6 py-2 rounded-md mt-28 w-fit"
          >
            View Collection{" "}
            <img
              src="/Arrow Right.png"
              alt="arrow"
              className="relative group-hover:translate-x-2 group-hover:transition-transform transition-transform"
            />
          </a>
        </div>
        <img
          src="/welcome_img.jpg"
          alt="books-image"
          className="w-1/2 hidden md:inline-block"
        />
      </section>
      <section className="responsive-layout flex flex-col items-center py-10 md:py-20 md:flex md:flex-row xl:p-40 md:justify-between gap-10">
        <div className="w-1/3">
          <div className="rounded-full bg-[#F6F6F6] w-12 h-12 flex justify-center items-center">
            <img src="/shipping.png" alt="" className="w-6" />
          </div>
          <h2 className="font-bold mt-8 mb-4">Free Shipping</h2>
          <p className="text-[#5C5F6A]">
            Upgrade your style today and get FREE shipping on all orders! Don't
            miss out.
          </p>
        </div>
        <div className="w-1/3">
          <div className="rounded-full bg-[#F6F6F6] w-12 h-12 flex justify-center items-center">
            <img src="/medal.png" alt="" className="w-6" />
          </div>
          <h2 className="font-bold mt-8 mb-4">Satisfaction Guarantee</h2>
          <p className="text-[#5C5F6A]">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div className="w-1/3">
          <div className="rounded-full bg-[#F6F6F6] w-12 h-12 flex justify-center items-center">
            <img src="/secure.png" alt="" className="w-6" />
          </div>
          <h2 className="font-bold mt-8 mb-4">Secure Payment</h2>
          <p className="text-[#5C5F6A]">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </section>
      <section className="responsive-layout pb-16 flex flex-col items-center">
        <h3 className="text-[#5C5F6A] font-medium">SHOP NOW</h3>
        <h2 className="font-semibold text-xl">Best Selling</h2>
        <div className="w-full flex flex-col justify-between items-center mt-10 gap-10 md:justify-center md:mt-24 md:flex md:flex-row md:flex-wrap">
          {bookList && (
            <>
              <Card
                productId={bookList[0].id}
                productName={bookList[0].name}
                isInStock={bookList[0].status === "InStock" ? true : false}
                price={bookList[0].price}
                imgUrl={bookList[0].image}
              />
              <Card
                productId={bookList[1].id}
                productName={bookList[1].name}
                isInStock={bookList[1].status === "InStock" ? true : false}
                price={bookList[1].price}
                imgUrl={bookList[1].image}
              />
              <Card
                productId={bookList[2].id}
                productName={bookList[2].name}
                isInStock={bookList[2].status === "InStock" ? true : false}
                price={bookList[2].price}
                imgUrl={bookList[2].image}
              />
              <Card
                productId={bookList[3].id}
                productName={bookList[3].name}
                isInStock={bookList[3].status === "InStock" ? true : false}
                price={bookList[3].price}
                imgUrl={bookList[3].image}
              />
            </>
          )}
        </div>
      </section>
      <section className="responsive-layout flex justify-between bg-[#F6F6F6]">
        <div className="my-16">
          <h2 className="font-bold text-2xl">Browse Our Fashion Paradise</h2>
          <p className="text-[#5C5F6A] mt-2 mb-7">
            Step into a world of fantasy and explore our diverse collection of
            book categories
          </p>
          <a
            href={`${web_link}/products`}
            className="bg-black text-white flex px-6 py-2 rounded-md w-fit group cursor-pointer"
          >
            Start Browsing{" "}
            <img
              src="/Arrow Right.png"
              alt="arrow"
              className="relative group-hover:translate-x-2 group-hover:transition-transform transition-transform"
            />
          </a>
        </div>
        <img
          src="https://i0.wp.com/jaybarnson.com/wp-content/uploads/2022/04/RascalDoesNotDream.jpg?fit=481%2C671&ssl=1"
          alt=""
          className="h-80"
        />
      </section>
      <section className="responsive-layout flex flex-col items-center py-40">
        <div className="flex gap-4">
          <p
            onClick={() => {
              setBookStatus("Featured");
            }}
            className={`font-semibold cursor-pointer ${
              bookStatus === "Featured"
                ? "border-2 rounded-full px-2"
                : "text-[#5C5F6A]"
            }`}
          >
            Featured
          </p>
          <p
            onClick={() => {
              setBookStatus("Latest");
            }}
            className={`font-semibold cursor-pointer ${
              bookStatus === "Latest"
                ? "border-2 rounded-full px-2"
                : "text-[#5C5F6A]"
            }`}
          >
            Latest
          </p>
        </div>
        <div className="w-full flex flex-col justify-between items-center mt-10 gap-10 md:justify-center md:mt-24 md:flex md:flex-row md:flex-wrap">
          {bookList && (
            <>
              <Card
                productId={bookList[4].id}
                productName={bookList[4].name}
                isInStock={bookList[4].status === "InStock" ? true : false}
                price={bookList[4].price}
                imgUrl={bookList[4].image}
              />
              <Card
                productId={bookList[5].id}
                productName={bookList[5].name}
                isInStock={bookList[5].status === "InStock" ? true : false}
                price={bookList[5].price}
                imgUrl={bookList[5].image}
              />
              <Card
                productId={bookList[6].id}
                productName={bookList[6].name}
                isInStock={bookList[6].status === "InStock" ? true : false}
                price={bookList[6].price}
                imgUrl={bookList[6].image}
              />
              <Card
                productId={bookList[7].id}
                productName={bookList[7].name}
                isInStock={bookList[7].status === "InStock" ? true : false}
                price={bookList[7].price}
                imgUrl={bookList[7].image}
              />
            </>
          )}
        </div>
      </section>
      <section className="responsive-layout py-12 bg-[#F6F6F6] flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">Join Our Newsletter</h2>
          <p className="text-[#5C5F6A] mt-4">
            We love to surprise our subscribers with occasional gifts
          </p>
        </div>
        <form className="flex w-1/3 h-12 gap-2">
          <input
            type="text"
            placeholder="Your email address"
            className="grow pl-2 outline-none bg-[#F6F6F6] border-2 px-2 py-1 rounded-md focus:border-[#878A92]"
          />
          <button className="bg-black text-white px-4 rounded">
            Subscribe
          </button>
        </form>
      </section>
      <Footer bgColor="white" />
    </>
  );
};

export default HomePage;
