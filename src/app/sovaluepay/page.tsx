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

export default function SoValuePayPage() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-sovaluepay-green-light mb-3">SoValuePay Fund</h1>
        <p className="text-xl text-solidum-gray-dark max-w-2xl mx-auto">
          Conectando investidores a operações de crédito com alta rentabilidade e garantia real.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Sobre o Programa SoValuePay Fund
        </h2>
        <div className="space-y-4">
          <FaqItem question="O que é o Programa SoValuePay Fund?">
            <p>O SoValuePay Fund é um programa de investimento exclusivo do Grupo Solidum que conecta investidores a operações de crédito com alta rentabilidade e garantia real. Com aportes a partir de R$ 10 mil, você participa de uma estrutura sólida, transparente e com retornos mensais.</p>
            <p>O Grupo Solidum Finance é referência no mercado financeiro, especializado em crédito com garantia e investimentos estruturados. Destacamo-nos pela solidez, segurança e comprometimento com resultados superiores. Nossa expertise em soluções financeiras estratégicas nos coloca como referência no setor, oferecendo aos investidores produtos altamente rentáveis, seguros e transparentes, sempre pautados na ética, inovação e confiança.</p>
          </FaqItem>

          <FaqItem question="Quais são os pilares do Grupo Solidum?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Referência no Setor:</strong> Oferecendo produtos altamente rentáveis, seguros e transparentes.</li>
              <li><strong>Comprometimento:</strong> Solidez, segurança e resultados superiores.</li>
              <li><strong>Alta Performance em Resultados:</strong> Foco total em soluções eficazes, rentáveis e personalizadas para gerar valor real aos clientes e parceiros.</li>
            </ul>
          </FaqItem>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Como Funciona a Operação?
        </h2>
        <div className="space-y-4">
          <FaqItem question="Qual o fluxograma da operação do SoValuePay Fund?">
            <p>A operação envolve três partes principais:</p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Investidores:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Realizam o aporte financeiro.</li>
                  <li>O valor é aplicado via SoValuePay Fund (SVPF).</li>
                  <li>A rentabilidade é garantida e creditada na conta do investidor.</li>
                </ul>
              </li>
              <li>
                <strong>Empresário (Tomador do Crédito):</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Envia a documentação necessária para análise de crédito.</li>
                  <li>Apresenta o imóvel que servirá como garantia.</li>
                  <li>Ocorre uma vistoria técnica do imóvel.</li>
                  <li>É formalizada a assinatura do Contrato SVPF.</li>
                </ul>
              </li>
              <li>
                <strong>SVPF (SoValuePay Fund - Operacional):</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Adquire as cartas de crédito contempladas.</li>
                  <li>Libera o capital para o cliente (empresário) em uma estrutura bancária própria.</li>
                  <li>O capital investido retorna automaticamente para a conta SVPF ao final do ciclo.</li>
                  <li>Realiza o pagamento aos investidores e às partes envolvidas.</li>
                </ul>
              </li>
            </ol>
          </FaqItem>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Detalhes do Investimento
        </h2>
        <div className="space-y-4">
          <FaqItem question="Como o SoValuePay Fund proporciona investimento inteligente com segurança e alta rentabilidade?">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Desenvolvimento do Programa:</strong> Atento às demandas do mercado, o Grupo Solidum desenvolveu o Programa SoValuePay Fund para oferecer uma opção de investimento robusta.</li>
              <li><strong>Benefícios para Investidores:</strong> Nosso programa permite a investidores obter alta rentabilidade com segurança, investindo em empresas sólidas que buscam crédito respaldado por garantias imobiliárias tradicionais.</li>
              <li><strong>Modelo de Negócio:</strong> Atuamos na aquisição de cartas contempladas, permitindo ao empresário utilizar nosso capital para recompra do próprio imóvel, pagando uma taxa competitiva de juros.</li>
            </ul>
          </FaqItem>

          <FaqItem question="Quais são os passos para o investidor?">
            <ol className="list-decimal list-inside space-y-2">
              <li>Abertura de conta SVP (SoValuePay).</li>
              <li>Assinatura do termo de adesão ao programa.</li>
              <li>Recebimento mensal da rentabilidade diretamente na conta.</li>
              <li>Ao final do período contratado, ocorre o resgate integral do aporte inicial somado à rentabilidade acumulada.</li>
            </ol>
          </FaqItem>

          <FaqItem question="Quais são os planos de investimento disponíveis?">
            <div className="grid md:grid-cols-2 gap-6 mt-2">
              <div className="border border-solidum-gray-medium rounded-lg p-4">
                <h4 className="font-semibold text-lg text-solidum-green">Plano 01</h4>
                <p><strong>Rentabilidade:</strong> 2,67% a.m.</p>
                <p><strong>Carência:</strong> 3 meses</p>
                <p><strong>Aporte mínimo:</strong> R$ 10.000</p>
              </div>
              <div className="border border-solidum-gray-medium rounded-lg p-4">
                <h4 className="font-semibold text-lg text-solidum-green">Plano 02</h4>
                <p><strong>Rentabilidade:</strong> 3,97% a.m.</p>
                <p><strong>Carência:</strong> 6 meses</p>
                <p><strong>Aporte mínimo:</strong> R$ 30.000</p>
              </div>
            </div>
          </FaqItem>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-6 pb-2 border-b border-solidum-gray-medium">
          Perguntas Frequentes (FAQ)
        </h2>
        <div className="space-y-4">
          <FaqItem question="Como garantem a segurança do capital investido?">
            <p>Todos os investimentos são protegidos por imóveis como garantia real, além do uso de contas escrow para garantir transparência e segurança jurídica em todas as operações.</p>
          </FaqItem>
          <FaqItem question="Qual é o prazo médio para resgate e rentabilidade?">
            <p>Os prazos variam entre 3 e 6 meses, com rentabilidade mensal garantida e resgate integral ao fim do período contratado.</p>
          </FaqItem>
          <FaqItem question="Existe risco envolvido no investimento?">
            <p>Como todo investimento, há riscos, porém são fortemente minimizados pelo rigoroso controle das operações, garantias imobiliárias sólidas e processos claros e transparentes.</p>
          </FaqItem>
          <FaqItem question="Quem pode investir no SoValuePay Fund?">
            <p>Investidores individuais ou institucionais que buscam segurança, rentabilidade elevada e baixo risco operacional.</p>
          </FaqItem>
        </div>
      </section>

      <section className="text-center py-8 bg-solidum-gray-light rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-solidum-blue-dark mb-4">Entre em Contato</h2>
        <p className="text-solidum-gray-dark">Para mais informações sobre o SoValuePay Fund:</p>
        <p className="mt-2">WhatsApp: <a href="https://wa.me/5517996783001" target="_blank" rel="noopener noreferrer" className="text-sovaluepay-green-light hover:underline">+55 17 99678-3001</a></p>
        <p>E-mail: <a href="mailto:contato@solidumfinance.com.br" className="text-sovaluepay-green-light hover:underline">contato@solidumfinance.com.br</a> | <a href="mailto:comercial@solidumfinance.com.br" className="text-sovaluepay-green-light hover:underline">comercial@solidumfinance.com.br</a></p>
        <p>Instagram: <a href="https://www.instagram.com/solidumfinance/" target="_blank" rel="noopener noreferrer" className="text-sovaluepay-green-light hover:underline">@solidumfinance</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/company/solidumfinance/" target="_blank" rel="noopener noreferrer" className="text-sovaluepay-green-light hover:underline">@solidumfinance</a></p>
        <p>Website: <a href="https://solidumfinance.com.br/" target="_blank" rel="noopener noreferrer" className="text-sovaluepay-green-light hover:underline">solidumfinance.com.br</a></p>
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

