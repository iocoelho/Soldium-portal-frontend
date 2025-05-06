import Link from 'next/link';

// Componente reutilizável para exibir um tópico de FAQ
const FaqItem = ({ question, children }: { question: string; children: React.ReactNode }) => (
  <details className="mb-4 p-4 bg-solidum-gray-light rounded-lg shadow hover:shadow-md transition-shadow">
    <summary className="font-semibold text-lg text-solidum-blue-dark cursor-pointer hover:text-solidum-green">
      {question}
    </summary>
    <div className="mt-2 text-solidum-gray-dark prose max-w-none">
      {children}
    </div>
  </details>
);

export default function ApraxPage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-solidum-green mb-3">Aprax Capital</h1>
        <p className="text-xl text-solidum-gray-dark max-w-2xl mx-auto">
          Informações e dúvidas sobre Antecipação de Recebíveis e Consórcio como Estratégia de Alavancagem Financeira.
        </p>
      </section>

      {/* Seção de Antecipação de Recebíveis */}
      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Antecipação de Recebíveis
        </h2>
        <div className="space-y-4">
          <FaqItem question="O que é a Antecipação de Recebíveis?">
            <p>A antecipação de recebíveis é uma solução financeira que permite às empresas adiantarem o recebimento de valores de vendas realizadas a prazo, como duplicatas, cheques pré-datados e faturas de cartão de crédito. Em vez de esperar o vencimento desses títulos, a empresa os negocia com uma instituição financeira, como a Aprax Capital, e recebe o dinheiro de forma imediata, descontando-se uma taxa pela operação.</p>
            <p>Essa modalidade é ideal para empresas que precisam de capital de giro rápido para cobrir despesas, investir em crescimento ou aproveitar oportunidades de negócio, sem a necessidade de recorrer a empréstimos bancários tradicionais, que costumam ter taxas mais elevadas e processos mais burocráticos.</p>
          </FaqItem>

          <FaqItem question="Como funciona o processo na Aprax Capital?">
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Cadastro e Análise:</strong> A empresa interessada realiza um cadastro e envia a documentação necessária. A Aprax Capital analisa o perfil da empresa e dos seus clientes (sacados).</li>
              <li><strong>Envio dos Recebíveis:</strong> Após a aprovação, a empresa envia os títulos (duplicatas, notas fiscais, etc.) que deseja antecipar.</li>
              <li><strong>Formalização:</strong> É formalizado um contrato de cessão de crédito.</li>
              <li><strong>Liberação dos Recursos:</strong> A Aprax Capital credita o valor correspondente aos recebíveis na conta da empresa, já descontando a taxa de antecipação.</li>
              <li><strong>Cobrança:</strong> A Aprax Capital assume a responsabilidade pela cobrança dos títulos dos sacados nas datas de vencimento originais.</li>
            </ol>
          </FaqItem>

          <FaqItem question="Quais são os benefícios da Antecipação de Recebíveis?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Capital de Giro Imediato:</strong> Acesso rápido a recursos para equilibrar o fluxo de caixa.</li>
              <li><strong>Melhora da Saúde Financeira:</strong> Permite o pagamento de fornecedores à vista, possibilitando melhores negociações e descontos.</li>
              <li><strong>Redução de Endividamento:</strong> Alternativa mais barata e ágil que empréstimos bancários.</li>
              <li><strong>Foco no Negócio:</strong> A empresa pode se concentrar em suas atividades principais, deixando a gestão da cobrança com especialistas.</li>
              <li><strong>Flexibilidade:</strong> A empresa escolhe quais e quantos recebíveis deseja antecipar, conforme sua necessidade.</li>
            </ul>
          </FaqItem>
          
          <FaqItem question="Quais tipos de recebíveis podem ser antecipados?">
            <p>A Aprax Capital trabalha com a antecipação de diversos tipos de recebíveis, incluindo:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Duplicatas mercantis e de serviços.</li>
              <li>Cheques pré-datados.</li>
              <li>Contratos com previsão de pagamentos futuros.</li>
              <li>Faturas de cartão de crédito (para alguns segmentos).</li>
            </ul>
            <p>É importante consultar um especialista da Aprax para verificar a elegibilidade dos seus recebíveis.</p>
          </FaqItem>
        </div>
      </section>

      {/* Seção de Consórcio como Estratégia de Alavancagem */}
      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Consórcio como Estratégia de Alavancagem Financeira
        </h2>
        <div className="space-y-4">
          <FaqItem question="O que é o consórcio e como ele pode ser usado para alavancagem?">
            <p>O consórcio é uma modalidade de compra cooperativa, onde um grupo de pessoas ou empresas se une com o objetivo de adquirir bens (como imóveis, veículos) ou serviços. Mensalmente, os participantes pagam parcelas e concorrem a sorteios ou podem ofertar lances para serem contemplados com a carta de crédito no valor do bem ou serviço desejado.</p>
            <p>Como estratégia de alavancagem, o consórcio permite planejar a aquisição de ativos importantes sem a necessidade de descapitalização imediata ou o pagamento de juros de financiamentos tradicionais. Empresas podem utilizar o consórcio para expandir patrimônio, adquirir frota, reformar instalações ou até mesmo como uma forma de investimento programado.</p>
          </FaqItem>

          <FaqItem question="Quais as vantagens do consórcio para empresas?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Ausência de Juros:</strong> Diferente de financiamentos, o consórcio não cobra juros, apenas uma taxa de administração diluída nas parcelas.</li>
              <li><strong>Planejamento Financeiro:</strong> Permite programar aquisições de médio e longo prazo.</li>
              <li><strong>Poder de Compra à Vista:</strong> Ao ser contemplado, o consorciado recebe o valor integral da carta de crédito, o que possibilita negociar descontos na compra do bem.</li>
              <li><strong>Flexibilidade:</strong> Diversos planos e prazos que se adaptam às necessidades da empresa.</li>
              <li><strong>Formação de Patrimônio:</strong> Uma maneira disciplinada de aumentar os ativos da empresa.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Como a Aprax Capital atua com consórcios?">
            <p>A Aprax Capital oferece consultoria especializada para empresas que buscam utilizar o consórcio como ferramenta de planejamento e alavancagem financeira. Auxiliamos na escolha dos melhores planos e administradoras, de acordo com os objetivos e o perfil de cada cliente, buscando otimizar as chances de contemplação e o retorno sobre o investimento.</p>
            <p>Analisamos o cenário da sua empresa e apresentamos as opções mais vantajosas para aquisição de imóveis, veículos, máquinas e equipamentos através de cartas de crédito de consórcio.</p>
          </FaqItem>
        </div>
      </section>

      <div className="text-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="text-solidum-green hover:text-solidum-blue-dark font-medium">
            &larr; Voltar para a Página Inicial
          </a>
        </Link>
      </div>
    </div>
  );
}

