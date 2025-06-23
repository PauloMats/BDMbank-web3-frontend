"use client";
import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';
import SectionServices from '@/components/SectionServices/SectionServices';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import { ServiceItemData } from '@/components/SectionServices/typo';

export const cambioServicesData: ServiceItemData[] = [
  { id: 1, image: '/img/24h-icon.png', title: 'Comodidade Total', text: 'Realize todas as operações de câmbio diretamente pelo nosso aplicativo, a qualquer hora e em qualquer lugar.' },
  { id: 2, image: '/img/discont-icon.png', title: 'Taxas Competitivas', text: 'Aproveite nossas taxas de câmbio competitivas e economize em suas transações internacionais.' },
  { id: 3, image: '/img/security-icon.png', title: 'Transações Seguras', text: 'Com a tecnologia avançada de segurança do BDM Bank, suas transações de câmbio são protegidas contra fraudes e acessos não autorizados.' },
  { id: 4, image: '/img/att-icon.png', title: 'Atualizações em tempo real', text: 'Consulte as taxas de câmbio em tempo real pelo aplicativo e tome decisões informadas sobre suas transações.' },
  { id: 5, image: '/img/suport-icon.png', title: 'Suporte 24/7', text: 'Nossa equipe de atendimento está disponível para oferecer suporte e esclarecer suas dúvidas a qualquer momento.' },
];

export const cambioBackgroundImage = '/img/cambio-bg.png'; // Imagem de fundo original


const CambioPage: React.FC = () => {
  return (
    <main>
      <ProductHero
        title="Soluções de Câmbio para o seu Negócio"
        description="Oferecemos as melhores taxas e um processo simplificado para suas operações de câmbio. Expanda seus negócios internacionalmente com a segurança e agilidade do BDM Bank."
        backgroundImageUrl="/img/cambio-hero.png"
      />
      <SectionServices
        title="Com os serviços de câmbio do BDM Bank você pode mais!"
        subtitle="Para quem busca mais do que uma simples conta global, o Cartão Pré-pago BDM Visa é a escolha ideal. Inscreva-se gratuitamente com um toque e descubra a liberdade financeira ao seu alcance!"
        backgroundImageUrl={cambioBackgroundImage}
        services={cambioServicesData}
        gridColsClass="lg:grid-cols-5" 
      />
      <HowItWorks />
    </main>
  );
};

export default CambioPage;