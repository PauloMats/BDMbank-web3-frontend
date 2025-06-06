import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function Desktop7() {
  return (
    <Container>
      <Content>
        <Card
          variant="large"
          title="CARTÃO DE <span>CRÉDITO</span>"
          text="<b>Controle Absoluto sobre seus gastos</b> <br>
                Cartão Pré-pago  <br>
                Praticidade e Segurança <br>
                Adaptado às suas necessidades financeiras <br>
                Sem surpresas ou juros altos"
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
