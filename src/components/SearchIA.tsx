"use client";

import React, { useState } from 'react';

const SearchIA: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse(''); // Limpa a resposta anterior

    try {
      // Chamada à API backend
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data.answer);
      setIsLoading(false);

    } catch (error) {
      console.error('Erro ao buscar resposta da IA:', error);
      setResponse('Desculpe, ocorreu um erro ao processar sua pergunta.');
      setIsLoading(false);
    }
  };

  return (
    <section className="my-8 p-6 bg-solidum-gray-light rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-solidum-blue-dark mb-4">Busca Inteligente</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite sua pergunta aqui..."
          className="flex-grow p-3 border border-solidum-gray-medium rounded-md focus:ring-2 focus:ring-solidum-green focus:border-solidum-green outline-none transition-shadow"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-solidum-green text-white px-6 py-3 rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-solidum-green focus:ring-opacity-50 disabled:opacity-50 transition-colors"
        >
          {isLoading ? 'Buscando...' : 'Perguntar'}
        </button>
      </div>
      {response && (
        <div className="mt-4 p-4 border border-solidum-gray-medium rounded-md bg-white">
          <h3 className="font-semibold text-solidum-blue-dark mb-2">Resposta:</h3>
          <p className="text-solidum-gray-dark whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </section>
  );
};

export default SearchIA;

