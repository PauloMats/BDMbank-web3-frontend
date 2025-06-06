import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function Desktop5() {
  return (
    <Container>
      <Content>
        <Card
          variant="large"
          title="CRÉDITO <span>PJ</span>"
          text="<b>Oportunidades comerciais</b> <br>
Suporte confiável e personalizado <br>
Apoio para seu negócio 1,1% <br>
Alcance novos horizontes <br>
Linha de crédito para startups"
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
