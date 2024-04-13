'use client'

import React, {useState} from "react";

const SummaryProduct = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-md bg-[#F6F6F6]">
        <img src="#" alt="" />
      </div>
      <p className="font-semibold text-lg ml-10">Product name</p>
      <p className="font-semibold ml-28">$123*22</p>
      <div className="flex border-2 w-fit items-center rounded-md ml-6">
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
      <button className="ml-6 bg-[#F6F6F6] rounded-md w-10 h-10 flex items-center justify-center active:bg-gray-300 active:rounded-md">
        <img src="/close-icon.png" alt="" />
      </button>
    </div>
  );
};

export default SummaryProduct;
