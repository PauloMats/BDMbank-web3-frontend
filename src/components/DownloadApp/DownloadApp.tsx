import { Container, Content, SideImage, DownloadButtons, StoreBadge, Title, Subtitle, Highlight } from './style'

export default function DownloadApp() {
  return (
    <Container>
      <Content>
        <Title>Baixe já o app</Title>
        <Subtitle>Crie sua conta PJ ou PF totalmente grátis</Subtitle>
        <Highlight>Simples, Rápido e sem burocracia</Highlight>

        <DownloadButtons>
          <StoreBadge src="/img/google-download.png" alt="Google Play" />
          <StoreBadge src="/img/apple-download.png" alt="Apple Store" />
        </DownloadButtons>
      </Content>

      <SideImage src="/img/smartphone-app.png" alt="Aplicativo no celular" />
    </Container>
  )
}
