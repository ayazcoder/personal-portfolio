import React from 'react'
import { Button } from '../button/Button'

export const Contact = () => {
  return (
    <div className='h-screen flex items-center w-full'>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col gap-0">
          <p className='text-[16px] text-main font-semibold leading-[30px] uppercase'>- let's connect</p>
          <p className='text-[40px] text-dark font-bold leading-[60px] capitalize pb-6'>Get in Touch</p>
          <p className='text-main leading-[30px] font-base '>I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
          <div className="text-dark font-medium flex flex-col gap-2 mt-5 text-lg pt-5">
            <p className="underline">+923139131611</p>
            <p className="underline">ayazcoder@outlook.com</p>
            <p className="underline">Islamabad, Pakistan</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 px-8">
          <input type="text" className='bg-white text-main rounded-sm p-3 font-normal w-full text-lg outline-none' placeholder='Enter you name' />
          <input type="text" className='bg-white text-main rounded-sm p-3 font-normal w-full text-lg outline-none' placeholder='Your Email' />
          <textarea
            className="bg-white text-main rounded-sm p-3 font-normal w-full text-lg h-32 resize-none outline-none"
            placeholder="message..."
          />

          <div className="w-full">
            <Button color="text-white" bgColor="bg-dark" text="Submit now" borderColor="border-dark" />
          </div>
        </div>
      </div>
    </div>
  )
}
