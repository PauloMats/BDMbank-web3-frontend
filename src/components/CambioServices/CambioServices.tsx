import React from 'react';
import SectionIntro from '@/components/SectionIntro/SectionIntro';
import Card from '@/components/card/card';

const servicesData = [
  {
    image: '/img/icons/comodidade.svg', // Exemplo de caminho. Altere para o seu.
    title: 'Comodidade Total',
    text: 'Realize todas as operações de câmbio diretamente pelo nosso aplicativo, a qualquer hora e em qualquer lugar.',
  },
  {
    image: '/img/icons/taxas.svg',
    title: 'Taxas Competitivas',
    text: 'Aproveite nossas taxas de câmbio competitivas e economize em suas transações internacionais.',
  },
  {
    image: '/img/icons/seguranca.svg',
    title: 'Transações Seguras',
    text: 'Com a tecnologia avançada de segurança do BDM Bank, suas transações de câmbio são protegidas contra fraudes e acessos não autorizados.',
  },
  {
    image: '/img/icons/atualizacoes.svg',
    title: 'Atualizações em tempo real',
    text: 'Consulte as taxas de câmbio em tempo real pelo aplicativo e tome decisões informadas sobre suas transações.',
  },
  {
    image: '/img/icons/suporte.svg',
    title: 'Suporte 24/7',
    text: 'Nossa equipe de atendimento está disponível para oferecer suporte e esclarecer suas dúvidas a qualquer momento.',
  },
];


const CambioServices = () => {
  return (
    <div className="relative py-20 bg-black overflow-hidden">
      {/* Imagem de fundo */}
      <img 
        src="/img/background-ondas.png" // Altere para o caminho da sua imagem
        alt="Ondas decorativas"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      
      {/* Conteúdo da seção */}
      <div className="relative container mx-auto px-6 z-10">
        <SectionIntro 
          title="Com os serviços de câmbio do BDM Bank você pode mais!"
          subtitle="Para quem busca mais do que uma simples conta global, o Cartão Pré-pago BDM Visa é a escolha ideal. Inscreva-se gratuitamente com um toque e descubra a liberdade financeira ao seu alcance!"
        />
        
        {/* Container dos Cards */}
        <div className="mt-16 bg-black bg-opacity-40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {servicesData.map((service, index) => (
              <Card 
                key={index}
                className="text-center"
                image={service.image}
                title={service.title}
                text={service.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CambioServices;
