"use client";

import React from 'react';
import Box from '../box/box';
import Card from '../card/card';
import { Props } from '../card/typo';

export default function ResumeBdmBankSection() {
  const cards: Props[] = [
    {
      image: '/img/insights.png',
      title: 'BDM POS',
      text: 'Aumente a eficiência do seu negócio integrando ferramentas de ponta, mantendo todas as suas necessidades gerenciadas em um único dispositivo.'
    },
    {
      image: '/img/insights.png',
      title: 'CÂMBIO',
      text: 'Otimize suas transações com a integração de ferramentas avançadas, simplificando a gestão de câmbio de moedas em um único lugar.'
    },
    {
      image: '/img/insights.png',
      title: 'CRÉDITO PJ',
      text: 'Melhore a eficiência do seu negócio com a integração de ferramentas avançadas, simplificando a gestão de suas linhas de crédito para Pessoa Jurídica em um único lugar.'
    },
    {
      image: '/img/insights.png',
      title: 'CARTÃO DE CRÉDITO',
      text: 'Amplie sua liberdade financeira com um cartão de crédito que incorpora ferramentas avançadas, possibilitando o gerenciamento de todos os seus gastos em um único lugar.'
    }
  ];

  return (
    <div className="relative bg-black overflow-hidden min-h-screen xl:min-h-[120vh]">
  <div className="absolute inset-0 z-0">
    <img
      src="/img/image-bg-gradiente.png"
      alt="background"
      className="w-full h-full object-cover opacity-50"
    />
  </div>

  <div className="relative z-10 w-full px-4 xl:px-[6rem]">
    {/* Título e descrição */}
    <div className="pt-16 text-center text-white">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Conta na <span className="text-yellow-400">web3</span> com tudo o que você precisa
      </h1>
      <br />
      <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
        O BDM Bank é para quem busca mais do que uma simples conta global, tenha seus negócios no universo da Web3,
        receba pagamentos com diversos cripto ativos e tokens digitais, tudo na palma de suas mãos e com controle total
      </p>
      <br /> <br />
      <p className="mt-2 text-sm text-gray-400">
        Inscreva-se gratuitamente, liberdade financeira e controle na palma de suas mãos.
      </p>
      <br /><br />
    </div>

    {/* Cards */}
    <Box
      alignment="stretch"
      classname="relative z-10 pt-10 pb-10 xl:mt-[8rem] xl:mb-7 gap-8 xl:gap-16 flex-col lg:flex-row"
    >
      {cards.map((item: Props, j: number) => (
        <Card
          className="xl:flex-1"
          key={j}
          image={item.image}
          title={item.title}
          text={item.text}
        />
      ))}
    </Box>
  </div>
</div>
  );
}
