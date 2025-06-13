import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function CartaoVisa() {
  return (
    <Container>
      <Content>
        <Card
          variant="large"
          title="CARTÃO DE <span>CRÉDITO</span>"
          text="<li><b>Controle Absoluto sobre seus gastos</b> </li>
          <li> Cartão Pré-pago </li>
          <li> Praticidade e Segurança </li>
          <li> Adaptado às suas necessidades financeiras </li>
          <li> Sem surpresas ou juros altos </li>"
          gap={4}
        />
        <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition">
          Saiba Mais
        </button>
      </Content>

      <SideImage autoPlay loop muted playsInline>
        <source src="/videos/credit-card.mp4" type="video/mp4" />
      </SideImage>
    </Container>
  )
}
