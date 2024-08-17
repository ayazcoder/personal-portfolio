import React from 'react'

export const Portfolio = () =>{
  return (
    <div className="h-screen flex flex-col items-center w-full gap-5 overflow-y-scroll scroll-smooth">
      <div className="w-full flex flex-col justify-between sm:flex-row mt-24">
        <div className="flex flex-col gap-2 text-center sm:text-start sm:w-1/2">
          <p className="uppercase text-main font-semibold">- Services</p>
          <p className="text-[30px] font-bold text-dark font-inter">My Services</p>
        </div>
        <div className="flex items-end">
          <p className="font-bold underline">pagination</p>
        </div>
      </div>

    
    </div>
  );
};
