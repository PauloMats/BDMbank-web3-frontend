import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';
import HowItWorks from '@/components/HowItWorks/HowItWorks';

import SectionServices from '@/components/SectionServices/SectionServices';
import { loanBackgroundImage, loanServicesData } from '@/components/SectionServices/data/loanServicesData';

const CreditoPJPage = () => {
  return (
    <main>
      <ProductHero 
        title="Crédito PJ para Impulsionar sua Empresa"
        description="Linhas de crédito com condições especiais para pessoas jurídicas. Invista no crescimento da sua empresa com o apoio financeiro que você precisa, de forma rápida e sem burocracia."
        backgroundImageUrl="/img/credito-pj-hero.png"
      />
      <SectionServices
        title="Cartão de Crédito VISA"
        subtitle="Esqueça as complicações e burocracias dos cartões de crédito tradicionais e experimente o controle absoluto sobre seus seus gastos com o Cartão Pré-pago BDM Visa. Tenha a praticidade e a segurança de um cartão que se adapta às suas necessidades financeiras diárias, sem surpresas ou juros altos."
        backgroundImageUrl={loanBackgroundImage}
        services={loanServicesData}
        gridColsClass="lg:grid-cols-4" 
      />
       <HowItWorks />
    </main>
  );
};

export default CreditoPJPage;
