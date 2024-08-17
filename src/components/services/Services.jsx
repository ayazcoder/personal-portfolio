import React from 'react';
import { ServicesList } from '../servicesList/ServicesList';

export const Services = () => {
  return (
    <div className="h-screen flex flex-col items-center w-full gap-5 overflow-y-scroll scroll-smooth">
      <div className="w-full flex flex-col justify-between sm:flex-row mt-24">
        <div className="flex flex-col gap-2 text-center sm:text-start sm:w-1/2">
          <p className="uppercase text-main font-semibold">- Services</p>
          <p className="text-[30px] font-bold text-dark font-inter">My Services</p>
        </div>
        <div className="flex items-end">
          <p className="font-bold underline">ayazcoder@outlook.com</p>
        </div>
      </div>

      <div className="w-full">
        <ServicesList />
      </div>

      {/* YouTube Intro Video */}
      <div className="w-full mt-10">
        <iframe
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          src="https://www.youtube.com/embed/your-video-id"
          title="Intro Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
