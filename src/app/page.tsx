import Link from 'next/link';
import SearchIA from '@/components/SearchIA'; // Importa o componente de busca

export default function HomePage() {
  const businessUnits = [
    {
      name: "Aprax Capital",
      description: "Soluções em antecipação de recebíveis e consórcios.",
      link: "/aprax",
      color: "text-solidum-green",
      hoverColor: "hover:text-solidum-blue-dark",
      bgColor: "bg-white", // Pode ser ajustado para cores específicas da unidade se desejado
    },
    {
      name: "Fundare Capital",
      description: "Crédito com garantia imobiliária e para incorporadoras.",
      link: "/fundare",
      color: "text-solidum-green",
      hoverColor: "hover:text-solidum-blue-dark",
      bgColor: "bg-white",
    },
    {
      name: "SolidFX",
      description: "Operações de câmbio e financiamento internacional.",
      link: "/solidfx",
      color: "text-solidum-green",
      hoverColor: "hover:text-solidum-blue-dark",
      bgColor: "bg-white",
    },
    {
      name: "SoValuePay",
      description: "Soluções de pagamento e fundos de investimento.",
      link: "/sovaluepay",
      color: "text-sovaluepay-green-light", // Cor específica se houver
      hoverColor: "hover:text-solidum-blue-dark",
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-solidum-gray-light rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-solidum-blue-dark mb-4">
          Portal de Dúvidas Solidum Finance
        </h1>
        <p className="text-lg md:text-xl text-solidum-gray-dark mb-8 max-w-2xl mx-auto">
          Respostas rápidas e precisas para parceiros credenciados e executivos do nosso time sobre as operações em cada unidade de negócio.
        </p>
        {/* Barra de Busca Global (Opcional - Placeholder) */}
        {/* 
        <div className="mt-8 max-w-xl mx-auto">
          <input 
            type="search" 
            placeholder="Buscar dúvidas em todo o portal..." 
            className="w-full p-4 rounded-md border border-solidum-gray-medium focus:ring-2 focus:ring-solidum-green focus:border-transparent outline-none transition-shadow"
          />
        </div>
        */}
      </section>

      {/* Componente de Busca IA */}
      <SearchIA />

      {/* Seção de Acesso Rápido às Unidades de Negócio */}
      <section>
        <h2 className="text-3xl font-semibold text-solidum-blue-dark mb-8 text-center">
          Nossas Unidades de Negócio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessUnits.map((unit) => (
            <Link href={unit.link} key={unit.name} legacyBehavior>
              <a className={`block p-8 ${unit.bgColor} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}>
                <h3 className={`text-2xl font-semibold ${unit.color} mb-3`}>{unit.name}</h3>
                <p className="text-solidum-gray-dark mb-4">{unit.description}</p>
                <span className={`inline-block ${unit.color} ${unit.hoverColor} font-medium transition-colors`}>
                  Acessar Dúvidas &rarr;
                </span>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

