import Link from 'next/link';

// Componente reutilizável para exibir um tópico de FAQ (pode ser movido para um diretório de componentes)
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

export default function FundarePage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-solidum-green mb-3">Fundare Capital</h1>
        <p className="text-xl text-solidum-gray-dark max-w-2xl mx-auto">
          Informações e dúvidas sobre Crédito com Garantia Imobiliária e Crédito para Incorporadoras e Construtoras.
        </p>
      </section>

      {/* Seção de Crédito com Garantia Imobiliária */}
      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Crédito com Garantia Imobiliária (Home Equity)
        </h2>
        <div className="space-y-4">
          <FaqItem question="O que é Crédito com Garantia Imobiliária?">
            <p>O Crédito com Garantia Imobiliária, também conhecido como Home Equity, é uma modalidade de empréstimo onde você utiliza seu imóvel (casa, apartamento, terreno ou sala comercial) quitado como garantia para obter crédito com taxas de juros mais baixas e prazos de pagamento mais longos em comparação com outras linhas de crédito pessoal.</p>
            <p>Na Fundare Capital, você pode transformar seu patrimônio imobiliário em capital para realizar seus projetos, quitar dívidas mais caras, investir no seu negócio ou cobrir despesas emergenciais, sem precisar vender seu imóvel.</p>
          </FaqItem>

          <FaqItem question="Quais as vantagens do Home Equity da Fundare Capital?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Taxas de Juros Reduzidas:</strong> Por ter o imóvel como garantia, os riscos para a instituição financeira são menores, o que se reflete em taxas mais atrativas.</li>
              <li><strong>Prazos Extensos:</strong> Possibilidade de parcelamento em prazos mais longos, o que resulta em parcelas mensais menores.</li>
              <li><strong>Valores Elevados:</strong> O valor do crédito pode chegar a uma porcentagem significativa do valor de avaliação do imóvel.</li>
              <li><strong>Flexibilidade de Uso:</strong> O dinheiro pode ser utilizado para qualquer finalidade, sem necessidade de comprovação de destino.</li>
              <li><strong>Processo Simplificado:</strong> A Fundare Capital busca desburocratizar o acesso ao crédito.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quais tipos de imóveis são aceitos como garantia?">
            <p>A Fundare Capital aceita diversos tipos de imóveis como garantia, desde que estejam quitados e com a documentação regularizada. Entre eles:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Imóveis residenciais (casas e apartamentos).</li>
              <li>Imóveis comerciais (salas e lojas).</li>
              <li>Terrenos urbanos.</li>
            </ul>
            <p>Uma avaliação do imóvel será realizada para determinar o valor de mercado e o montante de crédito que poderá ser liberado.</p>
          </FaqItem>
        </div>
      </section>

      {/* Seção de Crédito para Incorporadoras e Construtoras */}
      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Crédito para Incorporadoras e Construtoras
        </h2>
        <div className="space-y-4">
          <FaqItem question="Quais soluções de crédito a Fundare Capital oferece para o setor da construção civil?">
            <p>A Fundare Capital entende os desafios e as necessidades específicas do setor da construção civil. Oferecemos soluções de crédito personalizadas para incorporadoras e construtoras, visando viabilizar projetos e otimizar o fluxo de caixa das empresas. Nossas principais linhas incluem:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Crédito para Obras (Plano Empresário):</strong> Financiamento para as diversas fases da construção, desde a fundação até o acabamento.</li>
              <li><strong>Capital de Giro:</strong> Recursos para cobrir despesas operacionais, compra de materiais e pagamento de mão de obra.</li>
              <li><strong>Antecipação de Recebíveis de Vendas:</strong> Adiantamento de valores de unidades já vendidas na planta ou em construção.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quais os benefícios de obter crédito com a Fundare para meu projeto imobiliário?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Agilidade na Liberação:</strong> Processos otimizados para atender à urgência do setor.</li>
              <li><strong>Taxas Competitivas:</strong> Condições financeiras atrativas e adequadas à realidade do mercado.</li>
              <li><strong>Análise Especializada:</strong> Profissionais com experiência no mercado imobiliário para entender e atender às suas necessidades.</li>
              <li><strong>Flexibilidade nos Prazos e Garantias:</strong> Soluções customizadas para cada projeto.</li>
              <li><strong>Parceria de Longo Prazo:</strong> Buscamos construir relacionamentos sólidos e duradouros com nossos clientes.</li>
            </ul>
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

