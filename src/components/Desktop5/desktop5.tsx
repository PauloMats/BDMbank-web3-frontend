import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function Desktop5() {
  return (
    <Container>
      <Content>
        <Card
          title="CÂMBIO"
          text="<b>As principais moedas e a menor taxa de câmbio.</b> <br>
taxa de câmbio comercial <br>
IOF de apenas 1,1% <br>
Taxas reduzidas"
          gap={4}
        />
        <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition">
          Saiba Mais
        </button>
      </Content>

      <SideImage src="/img/image-coin-cambio.png" alt="Imagem lateral" />
    </Container>
  )
}
