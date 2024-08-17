import React from 'react'
import { Button } from '../button/Button'
import './styles.css'
import { ExperienceCard } from '../experienceCard/ExperienceCard'
export const About = () => {
  return (
    <div className='h-screen flex flex-col items-center w-full gap-5 overflow-y-scroll scroll-smooth'>
      <div className="w-full flex flex-col sm:flex-row mt-24">

        <div className="flex flex-col gap-2 text-center sm:text-start sm:w-1/2">
          <p className='uppercase text-main font-semibold'>- nice to meet you!</p>
          <p className='text-[30px] font-bold text-dark'>Ayaz Khan</p>
          <p className='font-bold text-dark'>Web Designer & Developer</p>
          <div className="my-7">
            <Button color="text-white" bgColor="bg-dark" text="Get a Project?" borderColor="border-dark" />
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:w-1/2">
          <p className="font-medium text-main leading-8">
            Hello there! My name is <span className='text-yellow'>Ayaz Khan</span>. I am a web designer & developer, and I'm very passionate and dedicated to my work.
          </p>
          <p className="font-medium text-main leading-8">
            With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
          </p>
          <div class="overflow-x-auto">
            <table class="table-auto w-full border-collapse">
              <thead>
                <tr>
                  <th class="py-2 px-4 text-blue text-start underline w-1/4">Age</th>
                  <th class="py-2 px-4 text-blue text-start underline w-1/4">Born In</th>
                  <th class="py-2 px-4 text-blue text-start underline w-1/4">Mail</th>
                  <th class="py-2 px-4 text-blue text-start underline w-1/4">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 font-bold text-dark text-start" data-label="Age">24</td>
                  <td class="py-2 px-4 font-bold text-dark text-start" data-label="Born In">Islamabad, Pakistan</td>
                  <td class="py-2 px-4 font-bold text-dark text-start" data-label="Mail">ayazcoder@outlook.com</td>
                  <td class="py-2 px-4 font-bold text-dark text-start" data-label="Phone">+923139131611</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      {/* cards */}
      <div className="flex w-full justify-between my-10">
        <div className="w-[30%] h-[160px] flex flex-col items-center justify-center bg-[#d3f4ec]">
          <p className="text-[40px] mb-[7px] font-inter font-bold">3+</p>
          <p className="font-[16px] text-main uppercase">Years of Experience</p>
        </div>
        <div className="w-[30%] h-[160px] flex flex-col items-center justify-center bg-[#fce8d4]">
          <p className="text-[40px] mb-[7px] font-inter font-bold">9+</p>
          <p className="font-[16px] text-main uppercase">Projects Completed</p>
        </div>
        <div className="w-[30%] h-[160px] flex flex-col items-center justify-center bg-[#e3f9e0]">
          <p className="text-[40px] mb-[7px] font-inter font-bold">5+</p>
          <p className="font-[16px] text-main uppercase">Happy Clients</p>
        </div>
      </div>
    <ExperienceCard/>
    </div>
  )
}
