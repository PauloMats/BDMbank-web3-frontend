import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';

const CartaoPage = () => {
  return (
    <main>
      <ProductHero 
        title="O Cartão Ideal para suas Necessidades"
        description="Seja para o dia a dia ou para suas viagens, nosso cartão oferece benefícios exclusivos, segurança e controle total dos seus gastos através do nosso app."
        backgroundImageUrl="/img/cartao-hero.png"
      />
    </main>
  );
};

export default CartaoPage;
