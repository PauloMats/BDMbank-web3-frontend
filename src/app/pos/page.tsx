import React from 'react';
import ProductHero from '@/components/ProductHero/ProductHero';

const PosPage = () => {
  return (
    <main>
      <ProductHero 
        title="Vantagens para quem quer vender mais"
        description="Descubra a excelência em transações financeiras com as Maquininhas de Cartão de Crédito da BDM. Projetadas para atender a todo tipo de demandas comerciais. Desde pequenos estabelecimentos até grandes empresas, proporciona conveniência e eficiência, garantindo uma experiência de pagamento perfeita para os clientes."
        backgroundImageUrl="/img/pos-hero.png"
      />
    </main>
  );
};

export default PosPage;
