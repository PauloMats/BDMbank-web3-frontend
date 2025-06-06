'use client'

import styled from 'styled-components'

export const Container = styled.section`
  background-color: #080B12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`

export const Content = styled.div`
  color: white;
  max-width: 600px;
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 1rem;
`

export const Highlight = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #FFD700; /* amarelo destaque */
  margin-bottom: 2rem;
`

export const DownloadButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const StoreBadge = styled.img`
  height: 60px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 50px;
  }
`

export const SideImage = styled.img`
  width: 400px;
  max-width: 100%;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
