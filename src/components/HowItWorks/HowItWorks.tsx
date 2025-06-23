"use client";
import React from 'react';
import HowItWorksStep from './HowItWorksStep';
import howItWorksData from './howItWorksData';
import { HowItWorksStepData } from './typo';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Como funciona?</h1>

        <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start gap-y-12 md:gap-y-0 md:gap-x-8">
          {howItWorksData.map((step: HowItWorksStepData) => (
            <HowItWorksStep
              key={step.id}
              text={step.text}
              imageSrc={step.imageSrc}
              textPosition={step.textPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;