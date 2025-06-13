// src/components/Desktop2/Desktop2.tsx

"use client";
import React from "react";
// Importando os novos componentes estilizados com nomes mais claros
import {
  SectionContainer,
  LayoutColumn,
  InfoCard,
  CardContent,
  TextContainer,
  CardTitle,
  CardMainText,
  CardSubtitle,
  ImageWrapper,
  CardImage
} from "./style";

const Desktop2 = () => {
  return (
    <SectionContainer>
      {/* Coluna da Esquerda */}
      <LayoutColumn>
        <InfoCard>
          {/* O conteúdo do card da esquerda é uma coluna flexível */}
          <CardContent direction="column" justify="space-around" align="flex-start">
            <TextContainer align="flex-start">
              <CardTitle>CONTA SEGURA</CardTitle>
            </TextContainer>
            
            <ImageWrapper>
              <CardImage
                src="/img/locker-img.png"
                alt="Cofre de segurança"
              />
            </ImageWrapper>
            
            <TextContainer align="flex-start">
              <CardMainText size="medium" align="flex-start">
                Uma conta segura para aporte de todo seu patrimônio
              </CardMainText>
            </TextContainer>
          </CardContent>
        </InfoCard>
      </LayoutColumn>

      {/* Coluna da Direita (com os dois cards empilhados) */}
      <LayoutColumn direction="column" gap="30px">
        {/* Card Superior Direito */}
        <InfoCard>
          {/* O conteúdo é uma linha: textos à esquerda, imagem à direita */}
          <CardContent direction="row" align="center">
            <TextContainer>
              <CardTitle>APP SIMPLIFICADO</CardTitle>
              <CardMainText>
                Crédito PJ<br />POS & Câmbio.
              </CardMainText>
              <CardSubtitle>COM UMA INTERFACE INTUITIVA</CardSubtitle>
            </TextContainer>
            <ImageWrapper>
              <CardImage
                src="/img/coin-brl-img.png"
                alt="Ícone de moedas"
              />
            </ImageWrapper>
          </CardContent>
        </InfoCard>

        {/* Card Inferior Direito */}
        <InfoCard>
          <CardContent direction="row" align="center">
            <TextContainer>
              <CardTitle>CARTÃO</CardTitle>
              <CardMainText>
                Cartão de<br />Crédito Visa
              </CardMainText>
              <CardSubtitle>FACILIDADE EM SUAS MÃOS</CardSubtitle>
            </TextContainer>
            <ImageWrapper>
              <CardImage
                src="/img/cartao-credito-img.png"
                alt="Cartão de crédito Visa"
              />
            </ImageWrapper>
          </CardContent>
        </InfoCard>
      </LayoutColumn>
    </SectionContainer>
  );
};

export default Desktop2;
