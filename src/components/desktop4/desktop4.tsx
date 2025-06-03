import { Container, GradientOverlay } from './style'

export default function Desktop4() {
  return (
    <Container>
      <GradientOverlay />
      <div className="relative z-10 flex flex-col justify-center items-start text-white h-full px-12 max-w-[600px]">
        <h2 className="text-4xl font-bold text-white">
          CRÉDITO <span className="text-yellow-500">PJ</span>
        </h2>
        <ul className="mt-4 space-y-1 text-sm text-white font-light">
          <li><strong>Oportunidades comerciais</strong></li>
          <li>Suporte confiável e personalizado</li>
          <li>Apoio para seu negócio</li>
          <li>Alcance novos horizontes</li>
          <li>Linha de crédito para startups</li>
        </ul>
        <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-600 transition">
          Saiba Mais
        </button>
      </div>
    </Container>
  )
}
