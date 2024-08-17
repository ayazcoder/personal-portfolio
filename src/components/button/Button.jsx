import React from 'react';

export const Button = ({ text = "", color = 'text-white', bgColor = 'bg-dark', borderColor = "border-dark", onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`inline-block border border-solid rounded-[4px] py-[9px] px-[40px] whitespace-nowrap transition duration-300 ease-in-out ${color} ${bgColor} border-[1.5px] ${borderColor}`}
    >
      {text}
    </button>
  );
};