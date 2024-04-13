'use client'
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import {web_link} from '@/config_var'
import React, { useState } from 'react'

const HomePage = () => {
  const [bookStatus, setBookStatus] = useState("Latest") // Featured | Latest
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
            productName="Light Novel 1"
            isInStock={true}
            price="13.45"
            imgUrl="https://moyashi-japan.com/cdn/shop/files/81VBD20oT8L._SL1500.jpg?v=1701386975"
          />
          <Card
            productName="Manga 1"
            isInStock={true}
            price="9.12"
            imgUrl={
              "https://product.hstatic.net/200000343865/product/2_4532de8990964ee586c7252a12e3a8f4_master.jpg"
            }
          />
          <Card
            productName="Light Novel 2"
            isInStock={true}
            price="13.45"
            imgUrl={
              "https://m.media-amazon.com/images/I/81+8UiitTuL._AC_UF1000,1000_QL80_.jpg"
            }
          />
          <Card
            productName="Light Novel 1"
            isInStock={true}
            price="13.45"
            imgUrl={
              "https://images.booksense.com/images/949/581/9781638581949.jpg"
            }
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
            imgUrl={
              "https://cdn.archonia.com/images/1-68542403-1-1-original1/reprise-of-the-spear-hero-vol-01-light-novel.jpg"
            }
            productName="The Reprise of the spear hero"
            price={12.34}
            isInStock={true}
          />
          <Card
            imgUrl={
              "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780759531048_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bwebp%5D"
            }
            productName={"Wolk & Spice"}
            price={9.45}
            isInStock={true}
          />
          <Card
            imgUrl={
              "https://mangaplus.shueisha.co.jp/drm/title/100034/title_thumbnail_portrait_list/312829.jpg?key=a0cb42c4bb04186d325b9fa8dd5f4271&duration=86400"
            }
            productName={"Jujustu Kaisen"}
            price={"3.10"}
            isInStock={true}
          />
          <Card
            imgUrl={
              "https://store.crunchyroll.com/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dwf91bd0ab/images/9781974745869_one-piece-manga-volume-106_1.jpg"
            }
            productName={"One Piece"}
            price={"3.14"}
            isInStock={true}
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
}

export default HomePage