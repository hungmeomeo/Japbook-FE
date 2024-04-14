import React from 'react'
import {web_link} from '@/config_var'
import { useRouter } from 'next/navigation';

const Card = ({productId, productName, isInStock, price, imgUrl}) => {
  const router = useRouter()
  return (
    <div onClick={() => {router.push(`${web_link}/products/${productId}`)}} className="p-2 hover:bg-slate-100 hover:rounded-lg cursor-pointer">
      <div className="w-64 h-72 bg-[#F6F6F6] rounded flex justify-center items-center">
        <img src={imgUrl} alt="" className='h-full'/>
      </div>
      <h4 className='mt-2'>{productName}</h4>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-xs font-semibold border-2 rounded-full px-2 py-1">
          {isInStock ? "IN STOCK" : "OUT STOCK"}
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Card