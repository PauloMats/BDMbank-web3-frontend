import { Container, GradientOverlay } from './style'
import Card from '../card/card'

export default function Desktop4() {
  return (
    <Container>
      <GradientOverlay />
      <div className="relative z-10 flex flex-col justify-center items-start text-white h-full px-14 max-w-[600px]">
        <Card
              title="Crédito <span>PJ</span>"
              text="Faça e Receba pagamentos de BDM Digital <br>
Aumente a visibilidade do seu negócio para milhares de usuários com o <b>BDMap</b>. <br>
Gestão de funcionários <br>
Controle de lucros e despesas <br>
Diversos Benefícios em uma única plataforma."
              gap={4}
            />
        <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition">
          Saiba Mais
        </button>
      </div>
    </Container>
  )
}
