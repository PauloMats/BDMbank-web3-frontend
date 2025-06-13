import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function Cambio() {
  return (
    <Container>
      <Content>
        <Card
          variant="large"
          title="CÂMBIO"
          text="<li><b>As principais moedas e a menor taxa de câmbio.</b></li>
          <li>taxa de câmbio comercial</li>
          <li>IOF de apenas 1,1%</li>
          <li>Taxas reduzidas</li>
          <li>Sem burocracia</li>"
          gap={4}
        />
        <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition">
          Saiba Mais
        </button>
      </Content>
      
      <SideImage autoPlay loop muted playsInline>
              <source src="/videos/exchange-coins.mp4" type="video/mp4" />
            </SideImage>
    </Container>
  )
}
