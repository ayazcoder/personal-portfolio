import React from "react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Web Design",
    description: "Web development is the process of building, programming...",
    imgSrc: "assets/img/service/1.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "App Development",
    description: "Building mobile applications for various platforms...",
    imgSrc: "assets/img/service/2.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "SEO Optimization",
    description: "Improving search engine rankings for websites...",
    imgSrc: "assets/img/service/3.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Graphic Design",
    description: "Creating visual content to communicate messages...",
    imgSrc: "assets/img/service/4.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Marketing Strategy",
    description: "Crafting strategies to promote businesses...",
    imgSrc: "assets/img/service/5.jpg",
  },
  {
    id: 6,
    number: "06",
    title: "Content Writing",
    description: "Writing engaging content for various platforms...",
    imgSrc: "assets/img/service/6.jpg",
  },
];

export const ServicesList = () => {
  return (
    <div className="w-full flex flex-wrap">
      {services.map((service) => (
        <div
          key={service.id}
          className="mb-8 pl-8 w-full md:w-1/2 lg:w-1/3 float-left dec"
        >
          <div className="relative w-full float-left clear-both h-full px-10 pt-8 pb-14 rounded-md bg-white shadow-lg">
            <div className="relative w-full z-10">
              <div className="w-full float-left mb-3">
                <span className="inline-block font-medium text-[20px] text-[rgba(19,15,73,0.5)] mb-4">
                  {service.number}
                </span>
                <h3 className="text-[20px] font-bold">{service.title}</h3>
              </div>
              <div className="w-full float-left mb-6">
                <p className="text-[#55527C] opacity-70">{service.description}</p>
              </div>
              <div className="elisc_tm_read_more">
                <a href="#" className="text-main hover:underline">
                  Read More
                  <span className="inline-block ml-2">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                        fill="#130F49"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <a href="#" className="absolute inset-0 z-20"></a>
          </div>
        </div>
      ))}
    </div>
  );
};
