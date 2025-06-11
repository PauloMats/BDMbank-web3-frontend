import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';

const CambioPage = () => {
  return (
    <main>
      <ProductHero 
        title="Soluções de Câmbio para o seu Negócio"
        description="Oferecemos as melhores taxas e um processo simplificado para suas operações de câmbio. Expanda seus negócios internacionalmente com a segurança e agilidade do BDM Bank."
        backgroundImageUrl="/img/background-cambio.jpg" // Altere para a imagem correspondente
      />
    </main>
  );
};

export default CambioPage;
