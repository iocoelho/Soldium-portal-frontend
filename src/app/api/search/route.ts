// /home/ubuntu/solidum-portal/src/app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';

// URL do backend Python hospedado no PythonAnywhere
const PYTHON_BACKEND_URL = 'https://IcaroCoelho.pythonanywhere.com/api/search';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const query = body.query;

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required and must be a string.' }, { status: 400 });
    }

    // Faz a requisição POST para o backend Flask
    const backendResponse = await fetch(PYTHON_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
      // Definir um timeout para a requisição fetch, se necessário (pode ser mais complexo no Node.js puro sem libs adicionais)
      // Por simplicidade, vamos confiar no timeout padrão do fetch ou do servidor de destino.
    });

    if (!backendResponse.ok) {
      // Tenta pegar a mensagem de erro do backend, se houver
      let errorBody = { error: `Error from backend: ${backendResponse.status} ${backendResponse.statusText}` };
      try {
        const backendErrorJson = await backendResponse.json();
        if (backendErrorJson && backendErrorJson.error) {
          errorBody.error = backendErrorJson.error;
        }
      } catch (e) {
        // Não conseguiu parsear o JSON de erro, usa o statusText
      }
      console.error('Backend Error:', errorBody.error);
      return NextResponse.json(errorBody, { status: backendResponse.status });
    }

    const responseData = await backendResponse.json();
    
    // O backend Flask retorna um JSON com a chave "response" para a resposta da IA
    // ou "error" se algo deu errado lá.
    if (responseData.error) {
        return NextResponse.json({ error: responseData.error }, { status: 500 });
    }

    return NextResponse.json({ answer: responseData.response });

  } catch (error: any) {
    console.error('API Search Route Error:', error);
    let errorMessage = 'Erro interno no servidor ao processar a busca.';
    if (error.code === 'ECONNREFUSED') {
        errorMessage = 'Não foi possível conectar ao serviço de busca IA. Verifique se o backend está em execução.';
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

