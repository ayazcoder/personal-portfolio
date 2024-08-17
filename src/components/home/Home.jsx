import React from 'react'
import { Button } from '../button/Button'
import LOGO from '../../assets/ayaz1.png';

export const Home = () => {
  return (
    <div className='h-screen flex items-center w-full'>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col gap-7">
          <p className='text-[50px] text-dark font-bold leading-[60px]'>Hi, I'm <span className='text-blue'>Ayaz!</span> <br />
            Creative <span className=''>Coder</span> Based in Pakistan</p>
          <p className='text-dark'>I'm a Florida based web designer & front-end developer with <br /> <span className='text-blue'>3+ years</span> of experience</p>
          <div className="flex gap-5">
            <Button color="text-white" bgColor="bg-dark" text="Get a Project?" borderColor="border-dark" />
            <Button color="text-main" bgColor="bg-white" text="Let's Talk" borderColor="border-dark" />
          </div>
          <div className="border-l-4 pl-4 border-yellow text-dark font-medium flex flex-col gap-2 mt-5 ">
            <p className="">+923139131611</p>
            <p className="">ayazcoder@outlook.com</p>
            <p className="">Islamabad, Pakistan</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <img src={LOGO} alt="not found" className='rounded-full' />
        </div>
      </div>
    </div>
  )
}
