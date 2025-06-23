import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';
import SectionServices from '@/components/SectionServices/SectionServices';
import { creditCardServicesData, creditCardBackgroundImage } from '@/components/SectionServices/data/creditCardServicesData';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CardHowItWorks from '@/components/CardSteps/CardHowItWorks';




const CartaoPage = () => {
  return (
    <main>
      <ProductHero 
        title="O Cartão Ideal para suas Necessidades"
        description="Seja para o dia a dia ou para suas viagens, nosso cartão oferece benefícios exclusivos, segurança e controle total dos seus gastos através do nosso app."
        backgroundImageUrl="/img/cartao-hero.png"
      />
       <SectionServices
        title="Cartão de Crédito VISA"
        subtitle="Esqueça as complicações e burocracias dos cartões de crédito tradicionais e experimente o controle absoluto sobre seus seus gastos com o Cartão Pré-pago BDM Visa. Tenha a praticidade e a segurança de um cartão que se adapta às suas necessidades financeiras diárias, sem surpresas ou juros altos."
        backgroundImageUrl={creditCardBackgroundImage}
        services={creditCardServicesData}
        gridColsClass="lg:grid-cols-5" 
      />
      <CardHowItWorks  />
    </main>
  );
};

export default CartaoPage;
