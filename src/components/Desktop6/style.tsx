'use client'

import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('/img/Desktop7-bg.png');
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
