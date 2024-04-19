import React from 'react'
import {web_link} from '@/config_var'
import { useRouter } from 'next/navigation';

const Card = ({productId, productName, isInStock, price, imgUrl}) => {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push(`${web_link}/products/${productId}`);
      }}
      className="p-2 hover:bg-slate-100 hover:rounded-lg w-[200px] h-[280px] xl:w-[240px] xl:h-[336px] 2xl:w-[300px] 2xl:h-[420px]"
    >
      <div className="w-full h-3/4 bg-[#F6F6F6] rounded">
        <img src={imgUrl} alt="" className="h-full mx-auto" />
      </div>
      <h4 className="mt-2 w-full overflow-hidden whitespace-nowrap text-ellipsis">
        {productName}
      </h4>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-xs font-semibold border-2 rounded-full px-2 py-1">
          {isInStock ? "IN STOCK" : "OUT STOCK"}
        </p>
        <p>{price} vnđ</p>
      </div>
    </div>
  );
}

export default Card