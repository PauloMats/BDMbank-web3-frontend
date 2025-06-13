import { Container, Content, ActionButton } from './style';
import Card from '../card/card';

export default function Desktop6() {
  return (
    <Container>
      <Content>
        <Card
            variant="large"
            title="Crédito <span>PJ</span>"
            text=" <li>Faça e Receba pagamentos de BDM Digital</li>
            <li> Aumente a visibilidade do seu negócio para milhares de usuários com o <b>BDMap</b>.</li>
            <li>Gestão de funcionários</li>
            <li>Controle de lucros e despesas</li>
            <li>Diversos Benefícios em uma única plataforma.</li>"
            gap={4}
          />
        <ActionButton>
          Saiba Mais
        </ActionButton>
      </Content>
    </Container>
  )
}
