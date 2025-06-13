// style.tsx
'use client'

import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #080B12;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 15%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 2rem;
  }
`

export const GradientOverlay = styled.div`
  display: none;
`

export const Content = styled.div`
  z-index: 10;
  color: white;
  max-width: 600px;
`

export const SideImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 2rem 0 0 0;
    width: 80%;
  }
`

export const CardWrapper = styled.div`
  h2 {
    font-size: 4rem; /* Título maior */
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p, span, div {
    font-size: 1.25rem; /* Corpo maior */
    line-height: 1.8;
  }
`

