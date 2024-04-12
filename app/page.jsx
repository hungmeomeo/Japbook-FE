import Card from '@/components/Card';
import React from 'react'

const HomePage = () => {
  return (
    <>
      <section className="xl:px-40 lg:px-24 md:px-10 bg-[#F6F6F6] flex justify-between items-center py-20">
        <div>
          <h1 className="text-5xl font-bold">Fresh Arrivals Today</h1>
          <p className="mt-5">Discover Our Newest Collection Today.</p>
          <button className="bg-black text-white flex px-6 py-2 rounded-md mt-28">
            View Collection <img src="/Arrow Right.png" alt="arrow" />
          </button>
        </div>
        <img src="/books-homepage.jpg" alt="books-image" className="w-1/2" />
      </section>
      <section className="xl:px-40 lg:px-24 md:px-10 p-40 flex justify-between gap-10">
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
          <Card productName="Light Novel 1" isInStock={true} price="13.45" />
          <Card productName="Light Novel 1" isInStock={true} price="13.45" />
          <Card productName="Light Novel 1" isInStock={true} price="13.45" />
        </div>
      </section>
      <section className="xl:px-40 lg:px-24 md:px-10 flex justify-between bg-[#F6F6F6]">
        <div className="my-16">
          <h2 className="font-bold text-2xl">Browse Our Fashion Paradise</h2>
          <p className="text-[#5C5F6A] mt-2 mb-7">
            Step into a world of fantasy and explore our diverse collection of
            book categories
          </p>
          <button className="bg-black text-white flex px-6 py-2 rounded-md">
            Start Browsing <img src="/Arrow Right.png" alt="arrow" />
          </button>
        </div>
        <img
          src="https://static.wikia.nocookie.net/ascendance-of-a-bookworm/images/6/6f/LN_P1V1-CoverEN.jpg/revision/latest/scale-to-width/360?cb=20210416220322"
          alt=""
        />
      </section>
      <section className="xl:px-40 lg:px-24 md:px-10 flex flex-col items-center py-40">
        <div className="flex gap-4">
          <p className="border-2 font-semibold rounded-full px-2">Featured</p>
          <p className="font-semibold text-[#5C5F6A]">Latest</p>
        </div>
        <div className="w-full flex justify-between mt-10">
          <Card />
          <Card />
          <Card />
          <Card />
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
    </>
  );
}

export default HomePage