'use client'

import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('/img/img-sunset-woman.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10%;

  @media (max-width: 768px) {
    background-position: top;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
`

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.85) 100%);
  z-index: 1;
`
