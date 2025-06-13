import { Container, Content, SideImage } from './style'
import Card from '../card/card'

export default function Desktop5() {
  return (
    <Container>
      <Content>
        <Card
          variant="large"
          title="CRÉDITO <span>PJ</span>"
          text="<li><b>Oportunidades comerciais</b></li>
          <li>Suporte confiável e personalizado</li>
          <li>Apoio para seu negócio</li>
          <li>Alcance novos horizontes</li>
          <li>Linha de crédito para startups</li>"
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
