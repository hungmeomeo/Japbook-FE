import React from 'react'

const Navigation = ({path}) => {
  return (
    <div className="w-full xl:px-40 lg:px-24 md:px-10 py-14 bg-[#F6F6F6]">
      <h2 className="font-bold text-2xl">{path}</h2>
      <p>
        <span className="text-[#5C5F6A]">Ecommerce &gt;</span> {path}
      </p>
    </div>
  );
}

export default Navigation