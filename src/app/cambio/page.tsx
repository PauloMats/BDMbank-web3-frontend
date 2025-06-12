import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';
import CambioServices from '@/components/CambioServices/CambioServices';

const CambioPage = () => {
  return (
    <main>
      <ProductHero 
        title="Soluções de Câmbio para o seu Negócio"
        description="Oferecemos as melhores taxas e um processo simplificado para suas operações de câmbio. Expanda seus negócios internacionalmente com a segurança e agilidade do BDM Bank."
        backgroundImageUrl="/img/cambio-hero.png" 
      />
      <CambioServices />
    </main>
  );
};

export default CambioPage;
