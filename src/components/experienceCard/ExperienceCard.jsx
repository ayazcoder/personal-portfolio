import React from 'react';

const cardData = [
  {
    id: 1,
    duration: '6 months',
    company: 'Company A',
    position: 'Frontend Developer',
    description: 'Worked on various frontend technologies.',
  },
  {
    id: 2,
    duration: '1 year',
    company: 'Company B',
    position: 'Backend Developer',
    description: 'Developed backend systems and APIs.',
  },
  {
    id: 3,
    duration: '3 months',
    company: 'Company C',
    position: 'UI/UX Designer',
    description: 'Designed user interfaces and experiences.',
  },
];

export const ExperienceCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full my-10">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="h-[160px] flex flex-col gap-4 justify-center bg-white rounded-[10px] p-4 shadow-lg"
        >
          <div className="flex justify-between w-full">
            <p className="font-inter font-bold text-yellow">- {card.duration}</p>
            <p className="font-inter font-bold text-main">-{card.company}</p>
          </div>
          <p className="font-inter font-bold text-dark">-{card.position}</p>
          <p className="font-inter font-bold text-main">-{card.description}</p>
        </div>
      ))}
    </div>
  );
};
