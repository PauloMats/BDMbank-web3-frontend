// src/components/Desktop2/style.ts

import styled from "styled-components";

// O contêiner principal da seção
export const SectionContainer = styled.section`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 80px;
  display: flex;
  gap: 40px;
  background: linear-gradient(180deg, rgba(25, 10, 3, 0.69) 0%, #000 3.85%);
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
  }
`;

// As colunas de layout
export const LayoutColumn = styled.div<{ direction?: string; gap?: string }>`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0'};
  min-width: 0;
`;

// Estilo base para os cards de informação
export const InfoCard = styled.div`
  background-color: #090909;
  flex: 1;
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  min-height: 420px;

  @media (max-width: 1200px) {
    // A coluna da esquerda (que é a primeira :first-child) tem uma altura maior
    &:first-child {
      min-height: 600px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    min-height: auto; // Deixa o conteúdo definir a altura
    
    // Na primeira coluna, o card ainda precisa de uma altura mínima no mobile
    &:first-child {
      min-height: 500px;
    }
  }
`;

// Container para o conteúdo DENTRO do card (controla a direção do flex)
export const CardContent = styled.div<{ direction?: string; justify?: string; align?: string; gap?: string; }>`
  flex: 1;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-between'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '20px'};

  @media (max-width: 768px) {
    // Em telas bem pequenas, força tudo a ser coluna para não amontoar
    flex-direction: column;
    text-align: center;
  }
`;

// Container específico para os textos, para agrupá-los
export const TextContainer = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  gap: 1.5rem;
  flex: 2;

  @media (max-width: 768px) {
    align-items: center;
    flex: 1; // Reseta o flex no mobile
  }
`;

// Título pequeno (CONTA SEGURA)
export const CardTitle = styled.h3`
  color: #a5a5a5;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.25rem);
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0;
`;

// Texto principal com gradiente
export const CardMainText = styled.p<{ size?: string; align?: string; }>`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  // Ajusta o tamanho da fonte baseado na prop 'size'
  font-size: ${({ size }) => (size === 'medium' ? 'clamp(1.8rem, 3vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4rem)')};
  line-height: 1.2;
  margin: 0;
  text-align: ${({ align }) => align || 'left'};
  background: linear-gradient(95deg, #fff 1.7%, rgba(255, 255, 255, 0.44) 100.26%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// Subtítulo (FACILIDADE EM SUAS MÃOS)
export const CardSubtitle = styled.h4`
  color: #a5a5a5;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.9rem, 1vw, 1.1rem);
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0;
`;

// Wrapper para a imagem, para controlar seu tamanho e posicionamento
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; // Ocupa uma parte do espaço flexível
  min-width: 0; // Previne overflow em contextos flex
`;

// A imagem em si
export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 350px; // Evita que as imagens fiquem desproporcionalmente grandes
  object-fit: contain;
`;
