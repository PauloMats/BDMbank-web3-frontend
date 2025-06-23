import React from 'react';
import SectionIntro from '@/components/SectionIntro/SectionIntro';
import Card from '@/components/card/card'; 
import { SectionServicesProps } from './typo'; 

const SectionServices: React.FC<SectionServicesProps> = ({
  title,
  subtitle,
  backgroundImageUrl,
  services,
  gridColsClass,
}) => {
  return (
    <div className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Imagem de fundo com opacidade e z-index para ficar atrás do conteúdo */}
      {backgroundImageUrl && (
        <img
          src={backgroundImageUrl}
          alt="Ondas decorativas"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50" // Mantive a opacidade
        />
      )}

      {/* Conteúdo da seção */}
      <div className="relative container mx-auto px-6 z-10">
        <SectionIntro
          title={title}
          subtitle={subtitle}
        />

        {/* Container dos Cards com o fundo e borda */}
        <div className="mt-16 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800">
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-10`}>
            {services.map((service, index) => (
              <Card
                key={service.id || index} 
                className="text-center"
                image={service.image}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;