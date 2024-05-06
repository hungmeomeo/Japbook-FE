import React from 'react'

const OrderProducts = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-md bg-[#F6F6F6] flex justify-center">
          <img src={""} alt="" className="object-fit" />
        </div>
        <p className="font-semibold ml-5 w-[180px] truncate text-ellipsis">
          Something here
        </p>
      </div>
      <div className="flex items-center">
        <p className="font-semibold ml-20">
          something here
        </p>
      </div>
    </div>
  );
}

export default OrderProducts