"use client";
import React from 'react';

interface CardHowItWorksItemProps {
  title: string;
  description: string;
}

const CardHowItWorksItem: React.FC<CardHowItWorksItemProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-[#070B13] p-6 rounded-lg shadow-md border border-gray-700 flex-1 min-w-[280px] max-w-[400px]">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default CardHowItWorksItem;