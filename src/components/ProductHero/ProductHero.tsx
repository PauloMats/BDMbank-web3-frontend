import React from 'react';

interface ProductHeroProps {
  title: string;
  description: string;
  backgroundImageUrl: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, description, backgroundImageUrl }) => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Imagem de Fundo */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-end opacity-40"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      ></div>

      {/* Container do Conteúdo */}
      <div className="relative flex items-end min-h-screen">
        <div className="container mx-auto px-6 lg:px-10 pb-20 text-white">
            <div className="pt-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {title}
                </h1>
            
                <p className="text-base md:text-lg text-gray-400">
                    {description}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;