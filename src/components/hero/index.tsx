'use client';
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden max-w-[1920px]">
      
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay para escurecer o vídeo */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />

      {/* Conteúdo principal */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <p className="text-sm tracking-widest text-neutral-400 mb-4">BEM VINDO AO BDM BANK</p>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight">
          Seu banco na <span className="text-yellow-400">Web3.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-xl">
          Contas descentralizadas, empréstimos em stablecoins e investimentos em NFTs – tudo sob <strong>seu controle</strong>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
