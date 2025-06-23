import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';
import HowItWorks from '@/components/HowItWorks/HowItWorks';

const CreditoPJPage = () => {
  return (
    <main>
      <ProductHero 
        title="Crédito PJ para Impulsionar sua Empresa"
        description="Linhas de crédito com condições especiais para pessoas jurídicas. Invista no crescimento da sua empresa com o apoio financeiro que você precisa, de forma rápida e sem burocracia."
        backgroundImageUrl="/img/credito-pj-hero.png"
      />
       <HowItWorks />
    </main>
  );
};

export default CreditoPJPage;
