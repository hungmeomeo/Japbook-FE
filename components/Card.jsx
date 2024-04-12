import React from 'react'

const Card = ({productName, isInStock, price, imgUrl}) => {
  return (
    <div className="p-2">
      <div className="w-64 h-72 bg-[#F6F6F6] rounded flex justify-center items-center">
        <img src={imgUrl} alt="" className='w-3/4'/>
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