import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal de Dúvidas Solidum Finance",
  description: "Respostas rápidas e precisas para parceiros e executivos do Grupo Solidum Finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-solidum-white text-solidum-black`}>
        {/* Header Placeholder */}
        <header className="bg-solidum-gray-light shadow-md">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div>
              <a href="/" className="text-xl font-semibold text-solidum-blue-dark hover:text-solidum-green">
                Grupo Solidum Finance
              </a>
            </div>
            <div className="space-x-4">
              <a href="/" className="text-solidum-gray-dark hover:text-solidum-green">Início</a>
              <a href="/aprax" className="text-solidum-gray-dark hover:text-solidum-green">Aprax Capital</a>
              <a href="/fundare" className="text-solidum-gray-dark hover:text-solidum-green">Fundare Capital</a>
              <a href="/solidfx" className="text-solidum-gray-dark hover:text-solidum-green">SolidFX</a>
              <a href="/sovaluepay" className="text-solidum-gray-dark hover:text-solidum-green">SoValuePay</a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer Placeholder */}
        <footer className="bg-solidum-gray-light mt-12 py-8 text-center">
          <p className="text-solidum-gray-dark text-sm">
            © {new Date().getFullYear()} Grupo Solidum Finance. Todos os direitos reservados.
          </p>
          <div className="mt-2 space-x-4">
            <a href="https://solidumfinance.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-solidum-blue-dark hover:text-solidum-green">Solidum Finance</a>
            <a href="https://apraxcapital.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-solidum-blue-dark hover:text-solidum-green">Aprax Capital</a>
            <a href="https://fundarecapital.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-solidum-blue-dark hover:text-solidum-green">Fundare Capital</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

