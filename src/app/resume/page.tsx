"use client";
import React from 'react';
import Card from '@/components/card/card'; 
import DownloadButtons from '@/components/DownloadButtons/DownloadButtons';

// Componente para a Seção 1 (Hero)
const HeroSection = () => (
  // AJUSTE: Aumentado o padding vertical para maior espaçamento.
  <section className="bg-[#080B12] text-white py-32 md:py-46">
    <div className="container mx-auto px-2">
      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Coluna Esquerda: Textos e Botões */}
        <div className="md:w-3/5 text-center md:text-left">
          <p className="text-gray-400 mb-2">Faça parte da comunidade BDMBank</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Entre em um universo <br />
            <span className="text-gray-500">de serviços conectados.</span>
          </h1>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-gray-200 to-white text-black font-semibold py-3 px-8 rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto">
              Saiba mais
            </button>
            <a href="#" className="font-semibold text-white hover:text-gray-300 transition-colors">
              Explore mais &gt;
            </a>
          </div>
        </div>
        {/* Coluna Direita: Estatísticas */}
        <div className="md:w-2/5 flex flex-col gap-8 text-left pl-0 md:pl-16">
          <div>
            <p className="text-5xl lg:text-6xl font-semibold">1000+</p>
            <p className="text-gray-400 text-lg">Downloads</p>
          </div>
          <div>
            <p className="text-5xl lg:text-6xl font-semibold">$12B+</p>
            <p className="text-gray-400 text-lg">Negociados</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Componente para a Seção 2 (Funcionalidades)
const FeaturesSection = () => {
    // Dados para os cards da seção de funcionalidades
    const features = [
      { image: '/img/pos-icon.png', title: 'POS', text: 'Aumente a eficiência do seu negócio integrando ferramentas de ponta, mantendo todas as suas necessidades gerenciadas em um único dispositivo.' },
      { image: '/img/cambio-icon.png', title: 'CÂMBIO', text: 'Otimize suas transações com a integração de ferramentas avançadas, simplificando a gestão de câmbio de moedas em um único lugar.' },
      { image: '/img/money-icon.png', title: 'CRÉDITO PJ', text: 'Melhore a eficiência do seu negócio com a integração de ferramentas avançadas, simplificando a gestão de suas linhas de crédito para Pessoa Jurídica em um único lugar.' },
      { image: '/img/cartao-icon.png', title: 'CARTÃO DE CRÉDITO', text: 'Amplie sua liberdade financeira com um cartão de crédito que incorpora ferramentas avançadas, possibilitando o gerenciamento de todos os seus gastos em um único lugar.' }
    ];

    return(
      // AJUSTE: Aumentado o padding vertical para maior espaçamento.
      <section className="bg-black py-28 md:py-36">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-16">Com um único app você tem:</h2>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            {/* Cards da Esquerda */}
            <div className="flex flex-col gap-12">
                {/* AJUSTE: Alterado 'items-end' para 'items-start' para alinhar os cards da esquerda à esquerda. */}
                <Card title={features[0].title} text={features[0].text} image={features[0].image} className="items-start text-left" />
                <Card title={features[1].title} text={features[1].text} image={features[1].image} className="items-start text-left" />
            </div>
            {/* Imagem Central */}
            <div className="my-8 lg:my-0">
                <img src="/img/smartphone-app.png" alt="Telas do aplicativo BDM Bank" className="mx-auto max-w-full h-auto"/>
            </div>
            {/* Cards da Direita */}
            <div className="flex flex-col gap-12">
                <Card title={features[2].title} text={features[2].text} image={features[2].image} className="items-start text-left" />
                <Card title={features[3].title} text={features[3].text} image={features[3].image} className="items-start text-left" />
            </div>
        </div>
      </section>
    );
}


// Componente para a Seção 3 (CTA Final)
const CtaSection = () => (
    // AJUSTE: Aumentado o padding vertical para maior espaçamento.
    <section className="bg-[#080B12] py-28 md:py-36">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Tá esperando o que?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Abra já sua conta PJ ou PF totalmente grátis
            </p>
            <div className="my-12">
                 <img src="/img/bdm-bank-logo2.png" alt="Logo BDMBank" className="h-26 mx-auto"/>
            </div>
            <DownloadButtons/>
        </div>
    </section>
);


// Componente principal da página que une todas as seções
export default function BDMBankPage() {
  return (
    // AJUSTE: Adicionada a classe 'font-sans' para aplicar a fonte padrão sem serifa em toda a página.
    <main className="font-sans">
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
