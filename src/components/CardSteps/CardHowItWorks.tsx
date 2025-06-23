"use client";
import React from 'react';
import Image from 'next/image'; 
import CardHowItWorksItem from './CardHowItWorksItem';
import cardHowItWorksData from './cardHowItWorksData';
import { CardHowItWorksItemData } from './typo'; 

const CardHowItWorks: React.FC = () => {
  return (
    <section className="bg-[#070B13] py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Coluna da Esquerda: Blocos de Texto */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-18 md:gap-y-10 w-full">
          {cardHowItWorksData.map((item: CardHowItWorksItemData) => (
            <CardHowItWorksItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Coluna da Direita: Imagem do Cartão */}
        <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
          <div className="relative w-full max-w-[400px] aspect-[1/0.63] lg:max-w-none lg:w-[600px] lg:h-[380px]"> 
            <Image
              src="/img/cards-visa.png"
              alt="Cartões Visa BDM Bank"
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw" 
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardHowItWorks;