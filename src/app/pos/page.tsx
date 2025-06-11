"use client";
import React from 'react';

const PosPage = () => {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Imagem de Fundo 
          IMPORTANTE: Troque '/img/background-pos.jpg' pelo caminho real da sua imagem.
      */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/img/background-pos.jpg')" }}
      ></div>

      {/* Container para o conteúdo sobre a imagem */}
      <div className="relative flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-20 text-white">
            <div className="max-w-2xl pt-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Vantagens para quem quer vender mais
                </h1>
                <p className="text-lg md:text-xl">
                    Descubra a excelência em transações financeiras com as Maquininhas de Cartão de Crédito da BDM. Projetadas para atender a todo tipo de demandas comerciais. Desde pequenos estabelecimentos até grandes empresas, proporciona conveniência e eficiência, garantindo uma experiência de pagamento perfeita para os clientes.
                </p>
            </div>
        </div>
      </div>
    </main>
  );
};

export default PosPage;
