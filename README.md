# Next Task Tester 🚀

Este projeto é uma aplicação de lista de tarefas desenvolvida com **Next.js 15 (App Router)** e **TypeScript**, focada em práticas de testes unitários utilizando **Jest** e **React Testing Library**.

## 🧠 Funcionalidades
- **Listagem de Tarefas**: Exibição de tarefas iniciais simuladas.
- **Adição de Tarefas**: Formulário para inserção de novos itens via Client Component.
- **Hook Customizado**: Gerenciamento do contador de tarefas através do hook `useContadorDeTarefas`.

## 🧪 Testes Implementados
- **Unitários (Hook)**: Validação da lógica de incremento e estado inicial do contador usando `renderHook`.
- **Unitários (Componentes)**: Verificação de renderização de inputs, botões e submissão do formulário com `fireEvent`.

## 🛠️ Tecnologias
- Next.js 15
- TypeScript
- Jest & React Testing Library

## 🚀 Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   npm run dev
   npm test