import { Container, Content, ActionButton } from './style';
import Card from '../card/card';

export default function CreditoPJ() {
  return (
    <Container>
      <Content>
        <Card
            variant="large"
            title="Crédito <span>PJ</span>"
            text=" <li><b>Oportunidades comerciais</b></li>
            <li> Suporte confiável e personalizado</li>
            <li>Apoio para seu negócio</li>
            <li>Alcance novos horizontes</li>
            <li>Linha de crédito para startups</li>"
            gap={4}
          />
        <ActionButton>
          Saiba Mais
        </ActionButton>
      </Content>
    </Container>
  )
}
