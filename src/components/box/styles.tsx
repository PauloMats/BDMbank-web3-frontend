"use client"
import styled from 'styled-components';

export const BoxContainer = styled.div`
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.80);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.00) 100%);
  backdrop-filter: blur(4px);

  padding: 1.5rem; /* 24px */
  
  @media (min-width: 1024px) {
    padding: 2rem; /* 32px */
  }
`;
