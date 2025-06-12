import React from 'react';
// CORREÇÃO: O caminho do import foi ajustado para usar o alias '@', 
// que é a forma padrão em projetos Next.js para apontar para a raiz. 
// Isso deve resolver o erro de caminho não encontrado.
import SectionIntro from '@/components/SectionIntro/SectionIntro';

const bandeirasData = [
  { name: 'Mastercard', logoUrl: '/img/bandeiras/mastercard.svg' },
  { name: 'Visa', logoUrl: '/img/bandeiras/visa.svg' },
  { name: 'American Express', logoUrl: '/img/bandeiras/amex.svg' },
  { name: 'Elo', logoUrl: '/img/bandeiras/elo.svg' },
  { name: 'Alelo', logoUrl: '/img/bandeiras/alelo.svg' },
  { name: 'Ticket', logoUrl: '/img/bandeiras/ticket.svg' },
  { name: 'Hipercard', logoUrl: '/img/bandeiras/hipercard.svg' },
];

const PosBandeiras = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center py-20">
      {/* Imagem de fundo */}
      <img 
        src="/img/background-ondas.png"
        alt="Ondas decorativas"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
      />
      
      {/* Conteúdo */}
      <div className="relative container mx-auto px-6 z-10">
        <SectionIntro 
          title="Com o POS você pode mais!"
          subtitle="Aceitamos as principais bandeiras"
        />
        
        {/* Container das Bandeiras */}
        <div className="mt-16 flex justify-center items-center flex-wrap gap-x-6 gap-y-8">
          {bandeirasData.map((bandeira) => (
            <div 
              key={bandeira.name} 
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm h-20 w-32 flex items-center justify-center p-4 rounded-xl border border-gray-700 transition-transform hover:scale-105 hover:border-yellow-400"
            >
              <img 
                src={bandeira.logoUrl} 
                alt={bandeira.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PosBandeiras;
