"use client";
import React from 'react';
import Image from 'next/image';

interface HowItWorksStepProps {
  text: string;
  imageSrc: string;
  textPosition: 'top' | 'bottom';
}

const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ text, imageSrc, textPosition }) => {
  const isTextTop = textPosition === 'top';

  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto p-4">
      {isTextTop && (
        <p className="text-white text-lg sm:text-xl font-medium mb-4">{text}</p>
      )}
      <div className="relative w-full aspect-[9/19.5] max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
        <Image
          src={imageSrc}
          alt={text}
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="rounded-lg object-contain"
        />
      </div>
      {!isTextTop && (
        <p className="text-white text-lg sm:text-xl font-medium mt-4">{text}</p>
      )}
    </div>
  );
};

export default HowItWorksStep;