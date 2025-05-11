# Prodsy - Interface do Usuário (Frontend)

## Descrição

Interface do usuário para a plataforma Prodsy, construída com Next.js para uma experiência web moderna e performática.

## Tech Stack

* **Framework Principal:** Next.js (versão ~15.x, utilizando o App Router)
* **Linguagem:** TypeScript
* **Gerenciamento de Estado (Servidor):** TanStack Query (React Query) v5
* **Gerenciamento de Estado (Cliente):** Zustand
* **Estilização:** Tailwind CSS
* **Componentes UI:** Shadcn UI
* **Formulários:** React Hook Form com Zod para validação de esquemas
* **Testes Unitários/Integração:** Jest com React Testing Library (configurado via `next/jest`)
* **Testes End-to-End (E2E):** Playwright
* **Linting:** ESLint (configurado pelo Next.js)
* **Formatação:** Prettier
* **Bundler (Desenvolvimento Recomendado):** Turbopack (usar com `npm run dev:turbo`)

## Pré-requisitos

* Node.js (versão 20.x ou superior é recomendada)
* `npm` (ou `yarn`/`pnpm` - ajuste os comandos conforme seu gerenciador de pacotes)
* Git

## Começando (Getting Started)

1.  **Clone o repositório (se ainda não o fez):**
    ```
    git clone <url-do-seu-repositorio-frontend>
    cd front-prodsy
    ```

2.  **Instale as dependências:**
    ```
    npm install
    ```

3.  **Configuração de Variáveis de Ambiente:**
    * Copie o arquivo `.env.example` (se você criar um) para `.env.local`:
        ```
        cp .env.example .env.local
        ```
    * Preencha as variáveis necessárias em `.env.local`. Exemplo:
        ```
        # .env.local
        NEXT_PUBLIC_API_URL=http://localhost:3001
        ```

## Scripts Disponíveis

* **Rodar o Servidor de Desenvolvimento:**
    Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
    ```
    npm run dev
    ```

* **Rodar o Servidor de Desenvolvimento com Turbopack (Mais Rápido):**
    ```
    npm run dev:turbo
    ```

* **Rodar Testes Unitários/Integração (Jest):**
    ```
    npm test
    ```
    Para modo watch (executa os testes novamente ao salvar arquivos):
    ```
    npm run test:watch
    ```

* **Rodar Testes End-to-End (Playwright):**
    * **Importante:** Certifique-se de que o servidor de desenvolvimento (`npm run dev` ou `npm run dev:turbo`) esteja rodando em `http://localhost:3000` em um terminal separado.
    * Em outro terminal:
        ```
        npx playwright test
        ```
    * Para ver o relatório HTML dos testes Playwright:
        ```
        npx playwright show-report
        ```
    * Para usar a interface gráfica do Playwright para debug:
        ```
        npx playwright test --ui
        ```

* **Rodar Linter (ESLint):**
    ```
    npm run lint
    ```

* **Construir o Projeto para Produção (Build):**
    ```
    npm run build
    ```

* **Iniciar o Servidor de Produção (após o `build`):**
    ```
    npm run start
    ```

## Estrutura de Pastas Principal

* `src/app/`: Contém as rotas (páginas) e layouts principais usando o App Router.
* `src/components/`: Componentes React reutilizáveis.
    * `src/components/ui/`: Componentes gerados/adicionados pelo Shadcn UI.
    * `src/components/providers/`: Provedores globais (ex: QueryProvider).
* `src/stores/`: Stores do Zustand para gerenciamento de estado global do cliente.
* `src/lib/`: Utilitários, helpers e a função `cn` do Shadcn UI.
* `public/`: Arquivos estáticos servidos diretamente (imagens, favicons, etc.).
* `tests/`: Arquivos de teste do Playwright (configurados para serem ignorados pelo Jest).
* `tests-examples/`: Exemplos de testes do Playwright (configurados para serem ignorados pelo Jest).
* `src/__tests__/`: Arquivos de teste do Jest para componentes e páginas.
* `jest.config.mjs`: Arquivo de configuração do Jest.
* `jest.setup.js`: Arquivo de setup para o Jest (ex: importar `@testing-library/jest-dom`).
* `playwright.config.ts`: Arquivo de configuração do Playwright.
* `.github/workflows/frontend-ci.yml`: Workflow do GitHub Actions para CI.

## Bibliotecas Chave e Seus Papéis

* **Next.js:** Framework React para construir interfaces de usuário com renderização no servidor (SSR), geração de sites estáticos (SSG), e mais, usando o App Router.
* **TanStack Query (React Query):** Gerenciamento de estado do servidor, incluindo caching, refetching, e sincronização de dados de APIs.
* **Zustand:** Solução de gerenciamento de estado global para o cliente, pequena, rápida e flexível.
* **Tailwind CSS:** Framework CSS utility-first para criar designs customizados rapidamente.
* **Shadcn UI:** Coleção de componentes de UI reutilizáveis e acessíveis, construídos com Radix UI e Tailwind CSS.
* **React Hook Form & Zod:** Para construção de formulários performáticos e validação de esquemas de dados de forma robusta e type-safe.
* **Playwright:** Framework para testes End-to-End.
* **Jest & React Testing Library:** Para testes unitários e de integração.