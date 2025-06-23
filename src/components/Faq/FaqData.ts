"use client";
import { FAQItemData } from './typo';

const faqData: FAQItemData[] = [
  {
    id: 1,
    question: "Existe taxa para uso da maquininha?",
    answer: "Sim, geralmente há taxas de transação aplicadas a cada venda processada pela maquininha. As taxas variam de acordo com o tipo de transação (débito, crédito à vista, crédito parcelado) e o plano contratado.",
  },
  {
    id: 2,
    question: "Como cancelar uma venda na maquininha?",
    answer: "O processo de cancelamento de uma venda na maquininha pode variar um pouco dependendo do modelo e da operadora. Geralmente, você precisa acessar o menu de 'Estorno' ou 'Cancelamento' na maquininha, informar o valor da venda e, em alguns casos, o código da transação original.",
  },
  {
    id: 3,
    question: "Quais são as taxas de recebimento de vendas da maquininha?",
    answer: "As taxas de recebimento de vendas variam amplamente entre as diferentes empresas de maquininhas e os planos oferecidos. As taxas comuns incluem uma porcentagem sobre o valor da venda para débito e crédito, e podem haver taxas adicionais para parcelamento. É importante consultar a tabela de tarifas da sua operadora.",
  },
  {
    id: 4,
    question: "Quais são as formas de recebimento das vendas da maquininha?",
    answer: "As formas de recebimento das vendas da maquininha geralmente incluem o depósito direto na sua conta bancária (corrente ou poupança) ou em uma conta digital associada à maquininha. O prazo para o dinheiro cair na conta também varia, podendo ser no mesmo dia, D+1, D+2, D+30, etc., dependendo do plano.",
  },
  {
    id: 5,
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega da maquininha pode variar de acordo com a sua localização e a empresa. Geralmente, as empresas informam um prazo estimado no momento da compra, que pode variar de alguns dias úteis a algumas semanas. Você pode rastrear o status da entrega pelo site ou aplicativo da operadora.",
  },
];

export default faqData;