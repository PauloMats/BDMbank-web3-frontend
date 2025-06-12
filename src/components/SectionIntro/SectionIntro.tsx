import React from 'react';

interface SectionIntroProps {
  title: string;
  subtitle: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title}
      </h2>
      <p className="text-lg text-gray-300">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionIntro;
