# Portal de Dúvidas Solidum Finance - Frontend Next.js

Este pacote contém o código-fonte do frontend do Portal de Dúvidas Solidum Finance, desenvolvido com Next.js.

O portal está configurado para se comunicar com o backend de Inteligência Artificial que você implantou no PythonAnywhere em `https://IcaroCoelho.pythonanywhere.com/api/search`.

## Pré-requisitos

Para rodar este projeto localmente ou fazer o build para produção, você precisará ter o Node.js e o npm (ou yarn/pnpm) instalados no seu computador.

- Node.js: [https://nodejs.org/](https://nodejs.org/)

## Como Rodar Localmente (para Desenvolvimento/Teste)

1.  **Descompacte o arquivo ZIP** em um diretório de sua preferência no seu computador.
2.  **Abra o terminal** (Prompt de Comando, PowerShell, Terminal do macOS/Linux).
3.  **Navegue até o diretório do projeto** onde você descompactou os arquivos (o diretório `solidum-portal`).
    ```bash
    cd caminho/para/solidum-portal
    ```
4.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```
    (Ou `yarn install` ou `pnpm install` se preferir usar outros gerenciadores de pacotes).
5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
6.  Abra seu navegador e acesse `http://localhost:3000`.

O portal deverá estar funcionando, e a busca inteligente tentará se comunicar com o backend no PythonAnywhere.

## Como Fazer o Build para Produção

Quando você decidir implantar o portal em uma plataforma de hospedagem (como Vercel, Netlify, ou outra de sua escolha que suporte Next.js), você geralmente precisará fazer um "build" de produção.

1.  Siga os passos 1 a 4 da seção "Como Rodar Localmente" para garantir que as dependências estejam instaladas.
2.  **Execute o comando de build:**
    ```bash
    npm run build
    ```
    Este comando criará uma versão otimizada do seu site no diretório `.next`.
3.  **Após o build, para rodar a versão de produção localmente (opcional, para teste):**
    ```bash
    npm run start
    ```
    Isso iniciará um servidor de produção local, geralmente em `http://localhost:3000`.

**Para Implantação em Plataformas (Ex: Vercel, Netlify):**

*   Geralmente, plataformas como Vercel e Netlify detectam que é um projeto Next.js e executam os comandos `npm run build` e `npm run start` (ou equivalentes) automaticamente quando você conecta seu repositório Git.
*   Se você for implantar manualmente em um servidor próprio, você precisará dos arquivos gerados pelo `npm run build` (principalmente o diretório `.next`) e de um servidor Node.js para executar `npm run start`.

## Backend da Busca Inteligente

Lembre-se que a funcionalidade de busca inteligente depende do seu backend Python/Flask estar em execução no PythonAnywhere (`https://IcaroCoelho.pythonanywhere.com/api/search`). Se o backend estiver offline ou inacessível, a busca no portal não funcionará.

## Estrutura do Projeto

*   `src/app/`: Contém as páginas principais e a lógica da aplicação Next.js.
    *   `src/app/api/search/route.ts`: Endpoint do Next.js que faz a ponte com seu backend PythonAnywhere.
    *   `src/components/SearchIA.tsx`: Componente React da interface de busca.
*   `public/`: Arquivos estáticos.
*   `conteudo_*.md` (no seu backend PythonAnywhere): Arquivos de markdown que servem de base de conhecimento para a IA.

Se tiver dúvidas, pode me perguntar!

