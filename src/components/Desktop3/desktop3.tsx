 import React from 'react';
import Box from '../box/box'
import  Card from '../card/card';
import { Props } from '../card/typo';
 
export default function Desktop3() {
  return (
 
 <Box alignment='stretch' classname='ps-10 pe-10 xl:ps-[6rem] pt-10 xl:pe-[6rem] pb-10 xl:mt-[8rem] xl:mb-7 gap-8 xl:gap-16 flex-col lg:flex-row'>
          <>
            {[
              {
                image: '/img/insights.png',
                title: 'BDM POS',
                text: 'Aumente a eficiência do seu negócio integrando ferramentas de ponta, mantendo todas as suas necessidades gerenciadas em um único dispositivo.'
              }, {
                image: '/img/insights.png',
                title: 'CÂMBIO',
                text: 'Otimize suas transações com a integração de ferramentas avançadas, simplificando a gestão de câmbio de moedas em um único lugar.'
              }, {
                image: '/img/insights.png',
                title: 'CRÉDITO PJ ',
                text: 'Melhore a eficiência do seu negócio com a integração de ferramentas avançadas, simplificando a gestão de suas linhas de crédito para Pessoa Jurídica em um único lugar.'
              }, {
                image: '/img/insights.png',
                title: 'CARTÃO DE CRÉDITO',
                text: 'Amplie sua liberdade financeira com um cartão de crédito que incorpora ferramentas avançadas, possibilitando o gerenciamento de todos os seus gastos em um único lugar.'
              }
            ].map((item: Props, j: number) => {
              return (
                <Card className='xl:flex-1' key={j} image={item.image} title={item.title} text={item.text} />
              );
            })}
          </>
        </Box>
    );
}