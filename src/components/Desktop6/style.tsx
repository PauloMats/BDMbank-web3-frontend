'use client'

import styled from 'styled-components';

// Container principal da seção. É praticamente idêntico ao do Desktop4,
// mas aponta para uma imagem de fundo diferente.
export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  // A única diferença principal é a imagem de fundo
  background-image: url('/img/Desktop7-bg.png');
  background-size: cover;
  background-position: start;
  background-repeat: no-repeat;

  // Usando Flexbox para alinhar o conteúdo
  display: flex;
  align-items: center;
  justify-content: flex-end; // Alinha à direita por padrão
  padding: 0 10%; // Espaçamento nas laterais para desktop

  // Ajustes para telas de tablet e mobile
  @media (max-width: 768px) {
    justify-content: center; // Centraliza o conteúdo no mobile
    padding: 2rem; // Reduz o espaçamento
  }
`;

// Wrapper para o conteúdo (Card + Botão)
export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinha itens à esquerda por padrão (texto do card)
  max-width: 600px;
  color: #fff;

  // No mobile, alinha tudo ao centro
  @media (max-width: 768px) {
    align-items: center;
    text-align: start;
  }
`;

// Botão de Ação
export const ActionButton = styled.button`
  margin-top: 1.5rem; // 24px
  background-color: #f59e0b; // Cor amarela (yellow-500)
  color: #000;
  font-weight: 600;
  padding: 0.5rem 1.5rem; // py-2 px-6
  border-radius: 0.25rem; // rounded
  transition: background-color 0.3s;

  &:hover {
    background-color: #d97706; // Cor amarela mais escura (yellow-600)
  }
`;
