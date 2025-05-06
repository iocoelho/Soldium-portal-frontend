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

export default function SolidFXPage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-solidum-green mb-3">SolidFX</h1>
        <p className="text-xl text-solidum-gray-dark max-w-2xl mx-auto">
          Operações de Câmbio e Financiamento Internacional – Simplificando Negócios Globais com a SolidFX.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Guia Completo SolidFX
        </h2>
        <div className="space-y-4">
          <FaqItem question="O que a SolidFX oferece?">
            <p>A SolidFX oferece soluções financeiras personalizadas para operações de câmbio e financiamento, atendendo empresas de todos os portes, com foco especial no setor de agronegócio.</p>
            <p>Seja para expandir negócios, financiar exportações ou importar bens essenciais, a SolidFX está preparada para atender às suas necessidades com agilidade, segurança e condições competitivas.</p>
          </FaqItem>

          <FaqItem question="O que é Câmbio Pronto?">
            <p>O câmbio pronto é ideal para operações rápidas, como pagamentos internacionais ou recebimentos de recursos em moeda estrangeira.</p>
            <p><strong>Exemplo Prático:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Situação:</strong> Uma empresa brasileira precisa pagar USD 10.000 a um fornecedor nos EUA.</li>
              <li><strong>Solução:</strong> A SolidFX realiza a operação de câmbio pronto, convertendo o valor em reais e transferindo o correspondente em dólares ao fornecedor.</li>
              <li><strong>Resultado:</strong> Transferência ágil, com taxas competitivas e sem complicações.</li>
            </ul>
          </FaqItem>

          <FaqItem question="O que é ACC (Adiantamento sobre Contrato de Câmbio)?">
            <p>O ACC permite que exportadores financiem suas operações antes do embarque das mercadorias.</p>
            <p><strong>Exemplo Prático:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Situação:</strong> Um produtor brasileiro vende soja para a China, mas precisa de recursos para arcar com os custos de produção antes do envio.</li>
              <li><strong>Solução:</strong> Com o contrato de câmbio em mãos, a SolidFX viabiliza um adiantamento, garantindo o fluxo de caixa necessário para concluir a produção.</li>
              <li><strong>Resultado:</strong> Operação segura, com capital disponível antes mesmo do embarque.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quais setores utilizam o ACC?">
            <ul className="list-disc list-inside ml-4">
              <li><strong>Agronegócio:</strong> Exportadores de commodities como soja, milho, café e açúcar.</li>
              <li><strong>Alimentos e Bebidas:</strong> Produtores que exportam carne, sucos, grãos e produtos processados.</li>
              <li><strong>Indústria Manufatureira:</strong> Empresas que exportam máquinas, veículos, equipamentos e eletroeletrônicos.</li>
              <li><strong>Têxtil e Calçadista:</strong> Empresas que exportam confecções, calçados e artigos de couro.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Como funciona o ACC na prática?">
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Exportador no Brasil fecha contrato comercial com um importador no exterior.</li>
              <li>Exportador no Brasil fecha um Adiantamento de Contrato de Câmbio (ACC) com uma Conta de Câmbio (sujeito a análise de crédito).</li>
              <li>Exportador no Brasil recebe da Conta de Câmbio em moeda nacional o equivalente em moeda estrangeira (sujeito a análise de documentos).</li>
              <li>Até a data da liquidação da operação, o exportador no Brasil envia os documentos e o importador no exterior remete a moeda estrangeira à Conta de Câmbio.</li>
            </ol>
          </FaqItem>

          <FaqItem question="O que é ACE (Adiantamento sobre Cambiais Entregues)?">
            <p>O ACE funciona como o ACC, mas ocorre após o embarque da mercadoria.</p>
            <p><strong>Exemplo Prático:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Situação:</strong> Após enviar máquinas aos EUA, uma empresa brasileira precisa esperar 30 dias pelo pagamento do cliente.</li>
              <li><strong>Solução:</strong> A SolidFX antecipa o valor da exportação, com base nos documentos cambiais apresentados, permitindo o uso imediato dos recursos.</li>
              <li><strong>Resultado:</strong> Fluxo de caixa fortalecido e operações mais tranquilas.</li>
            </ul>
          </FaqItem>
          
          <FaqItem question="Quais setores utilizam o ACE?">
            <ul className="list-disc list-inside ml-4">
                <li><strong>Exportadores de Bens Industrializados:</strong> Automóveis, máquinas, eletrônicos.</li>
                <li><strong>Empresas do Setor Agrícola:</strong> Que já embarcaram commodities e aguardam o pagamento.</li>
                <li><strong>Fabricantes de Insumos e Produtos Químicos:</strong> Exportadores de fertilizantes, plásticos e produtos petroquímicos.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Como funciona o ACE na prática?">
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Exportador no Brasil fecha contrato comercial com um importador no exterior e exporta mercadorias ou serviços.</li>
              <li>Exportador no Brasil fecha um Adiantamento sobre Cambiais Entregues (ACE) com a Conta de Câmbio e entrega documentos (sujeito a análise de crédito).</li>
              <li>Exportador no Brasil recebe da Conta de Câmbio em moeda nacional o equivalente em moeda estrangeira (sujeito a análise de documentos).</li>
              <li>Na data da liquidação da operação, o importador no exterior remete a moeda estrangeira à Conta de Câmbio.</li>
            </ol>
          </FaqItem>

          <FaqItem question="Quais as vantagens do ACC e ACE?">
            <ul className="list-disc list-inside ml-4">
              <li>Recebimento antecipado das vendas ao exterior realizadas a prazo.</li>
              <li>Taxas de juros competitivas, alinhadas ao mercado internacional.</li>
              <li>Maior previsibilidade cambial, reduzindo riscos de variação da moeda.</li>
              <li>IOF com alíquota ZERO, desde que a exportação seja concluída.</li>
              <li>Possibilidade de antecipação de até 100% do valor da exportação.</li>
              <li>Flexibilidade no prazo de pagamento, com a conversão do ACC em ACE após o embarque da mercadoria.</li>
            </ul>
          </FaqItem>

          <FaqItem question="O que é Finimp (Financiamento à Importação)?">
            <p>O Finimp é a solução ideal para parcelar pagamentos internacionais sem comprometer o capital de giro.</p>
            <p><strong>Exemplo Prático:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Situação:</strong> Uma indústria brasileira compra uma máquina dos EUA por USD 100.000 e prefere parcelar o pagamento.</li>
              <li><strong>Solução:</strong> A SolidFX paga o fornecedor à vista e financia o valor ao cliente em até 12 parcelas com taxas competitivas.</li>
              <li><strong>Resultado:</strong> Capital de giro preservado e maior flexibilidade financeira.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Como funciona a parceria com a SolidFX?">
            <ul className="list-disc list-inside ml-4">
              <li><strong>Identificação de Oportunidades:</strong> Trabalhamos juntos para identificar clientes no setor do agronegócio com potencial de operações internacionais.</li>
              <li><strong>Suporte Total:</strong> Oferecemos todo o suporte para a execução das operações, desde a análise até a aprovação de crédito.</li>
              <li><strong>Comissionamento Atraente:</strong> Parceiros recebem comissionamento por cada operação concluída.</li>
              <li><strong>Expansão de Portfólio:</strong> Agregue valor à sua carteira oferecendo soluções financeiras completas e diferenciadas.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quem pode se beneficiar das Soluções SolidFX?">
            <ul className="list-disc list-inside ml-4">
              <li><strong>Empresários e Exportadores:</strong> Que atuam em exportação e importação e desejam financiar suas operações, ampliar negócios ou renegociar dívidas.</li>
              <li><strong>Produtores Rurais e Agronegócios:</strong> Que precisam de crédito para insumos, modernização de maquinário ou expansão da produção.</li>
              <li><strong>Parceiros Comerciais do setor do Agronegócio:</strong> Consultores, representantes e profissionais com carteira de clientes interessados em soluções de câmbio e crédito.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quais os benefícios de trabalhar com a SolidFX?">
            <ul className="list-disc list-inside ml-4">
              <li><strong>Taxas Competitivas e Condições Personalizadas:</strong> Obtenha as melhores condições de câmbio e financiamento, ajustadas às necessidades da sua empresa.</li>
              <li><strong>Soluções Flexíveis:</strong> Use os recursos para consolidar dívidas, expandir negócios, adquirir equipamentos ou financiar importações e exportações.</li>
              <li><strong>Atendimento Especializado e Ágil:</strong> Nossa equipe garante um processo simples, transparente e rápido, priorizando sua satisfação.</li>
              <li><strong>Segurança Garantida:</strong> Operações realizadas com total transparência, protegendo seu patrimônio e seus dados.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Exemplos de Aplicações das soluções SolidFX:">
            <ul className="list-disc list-inside ml-4">
              <li>Financiamento de Insumos Agrícolas.</li>
              <li>Exportação de Commodities.</li>
              <li>Renovação de Equipamentos.</li>
              <li>Gestão de Fluxo de Caixa para empresários rurais.</li>
            </ul>
          </FaqItem>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Perguntas Frequentes Adicionais
        </h2>
        <div className="space-y-4">
          <FaqItem question="Quais moedas são aceitas pela SolidFX?">
            <p>Dólares americanos (USD) ou euros (EUR) são as moedas mais utilizadas. Dependendo da negociação e do banco, outras moedas conversíveis também podem ser aceitas, como libra esterlina (GBP), iene japonês (JPY) ou yuan chinês (CNY).</p>
          </FaqItem>
          <FaqItem question="Qual o prazo de liberação do crédito?">
            <p>Em geral, o crédito é liberado entre 2 a 5 dias úteis, sujeito à assinatura do contrato e análise de documentos.</p>
          </FaqItem>
          <FaqItem question="Quais documentos são necessários para as operações?">
            <p>Documentação da empresa (Contrato Social, CNPJ, documentos dos sócios) e comprovantes da exportação ou importação.</p>
          </FaqItem>
        </div>
      </section>

      <section className="text-center py-8 bg-solidum-gray-light rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-solidum-blue-dark mb-4">Entre em Contato com a SolidFX</h2>
        <p className="text-solidum-gray-dark">Para mais informações ou para iniciar uma parceria:</p>
        <p className="mt-2">WhatsApp: <a href="https://wa.me/5517996783001" target="_blank" rel="noopener noreferrer" className="text-solidum-green hover:underline">+55 17 99678-3001</a></p>
        <p>E-mail: <a href="mailto:contato@solidumfinance.com" className="text-solidum-green hover:underline">contato@solidumfinance.com</a></p>
        <p>Website: <a href="https://solidumfinance.com/solidfx/" target="_blank" rel="noopener noreferrer" className="text-solidum-green hover:underline">solidumfinance.com/solidfx/</a></p>
        <p className="text-sm text-solidum-gray-dark mt-1">Endereço: Av. Juscelino Kubitschek de Oliveira, 5.000 – Torre Comercial 1 – Conj 512/205 – São José do Rio Preto – SP</p>
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

