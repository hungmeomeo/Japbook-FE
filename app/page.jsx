"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { web_link } from "@/config_var";
import React, { useState } from "react";
import BookData from "@/fakeData";

const HomePage = () => {
  const [bookStatus, setBookStatus] = useState("Latest"); // Featured | Latest
  return (
    <>
      <section className="responsive-layout bg-[#F6F6F6] flex justify-between items-center py-20">
        <div>
          <h1 className="text-5xl font-bold">Fresh Arrivals Today</h1>
          <p className="mt-5">Discover Our Newest Collection Today.</p>
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
        <img src="/books-homepage.jpg" alt="books-image" className="w-1/2" />
      </section>
      <section className="responsive-layout p-40 flex justify-between gap-10">
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
      <section className="xl:px-40 lg:px-24 md:px-10 pb-16 flex flex-col items-center">
        <h3 className="text-[#5C5F6A] font-medium">SHOP NOW</h3>
        <h2 className="font-semibold text-xl">Best Selling</h2>
        <div className="w-full flex justify-between mt-24">
          <Card
            productId={BookData[0].productId}
            productName={BookData[0].productName}
            isInStock={BookData[0].isInStock}
            price={BookData[0].productPrice}
            imgUrl={BookData[0].imgUrl}
          />
          <Card
            productId={BookData[1].productId}
            productName={BookData[1].productName}
            isInStock={BookData[1].isInStock}
            price={BookData[1].productPrice}
            imgUrl={BookData[1].imgUrl}
          />
          <Card
            productId={BookData[2].productId}
            productName={BookData[2].productName}
            isInStock={BookData[2].isInStock}
            price={BookData[2].productPrice}
            imgUrl={BookData[2].imgUrl}
          />
          <Card
            productId={BookData[3].productId}
            productName={BookData[3].productName}
            isInStock={BookData[3].isInStock}
            price={BookData[3].productPrice}
            imgUrl={BookData[3].imgUrl}
          />
        </div>
      </section>
      <section className="xl:px-40 lg:px-24 md:px-10 flex justify-between bg-[#F6F6F6]">
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
        <div className="w-full flex justify-between mt-10">
          <Card
            productId={BookData[4].productId}
            productName={BookData[4].productName}
            isInStock={BookData[4].isInStock}
            price={BookData[4].productPrice}
            imgUrl={BookData[4].imgUrl}
          />
          <Card
            productId={BookData[5].productId}
            productName={BookData[5].productName}
            isInStock={BookData[5].isInStock}
            price={BookData[5].productPrice}
            imgUrl={BookData[5].imgUrl}
          />
          <Card
            productId={BookData[6].productId}
            productName={BookData[6].productName}
            isInStock={BookData[6].isInStock}
            price={BookData[6].productPrice}
            imgUrl={BookData[6].imgUrl}
          />
          <Card
            productId={BookData[7].productId}
            productName={BookData[7].productName}
            isInStock={BookData[7].isInStock}
            price={BookData[7].productPrice}
            imgUrl={BookData[7].imgUrl}
          />
        </div>
      </section>
      <section className="xl:px-40 lg:px-24 md:px-10 py-12 bg-[#F6F6F6] flex items-center justify-between">
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
