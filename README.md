# 🧾 Full Cycle Monolito - Invoice Module

Este projeto implementa o módulo de **Nota Fiscal (Invoice)** como parte do desafio da Full Cycle. Ele segue os princípios de arquitetura limpa, possui uma API REST em TypeScript e testes end-to-end utilizando `jest` e `supertest`.

---

## 🧱 Funcionalidades

- ✅ Geração de Invoice (`/checkout`)
- ✅ Consulta de Invoice por ID (`/invoice/:id`)
- ✅ Cadastro mockado de `products` e `clients`
- ✅ Testes e2e com cobertura acima de 90%

---

## 🚀 Tecnologias

- TypeScript
- Node.js
- Express
- Jest
- Supertest

---

## 📂 Estrutura do Projeto

src/
├── api/ # Camada de rotas e servidor Express
│ ├── routes/
│ └── server.ts
├── config/ # Facade e repositório compartilhado
├── domain/ # Entidades e Value Objects
├── facade/ # Padrão Facade
├── factory/ # Factory de fachada
├── infra/db/ # Repositório em memória
├── usecase/ # Casos de uso
└── tests/ # Testes e2e e unitários


---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/juhsouza122/full-cycle-sistemas-monoliticos.git
cd full-cycle-sistemas-monoliticos

# Instale as dependências
npm install


🧪 Rodar os Testes
npm test

Você verá algo como:
PASS  src/tests/e2e/invoice.e2e.spec.ts
  ✓ should return 404 for non-existent invoice
  ✓ should create and retrieve an invoice


🔗 Endpoints da API

🔹 Criar Produto (mock)
POST /products
🔹 Criar Cliente (mock)
POST /clients
🔹 Criar Invoice
POST /checkout

{
  "name": "Cliente Teste",
  "document": "99999999999",
  "street": "Rua XPTO",
  "number": "123",
  "complement": "Apto 2",
  "city": "SP",
  "state": "SP",
  "zipCode": "00000-000",
  "items": [
    { "id": "1", "name": "Produto A", "price": 100 },
    { "id": "2", "name": "Produto B", "price": 200 }
  ]
}
🔹 Buscar Invoice por ID
GET /invoice/:id
🧠 Observações

O repositório de Invoice está implementado em memória
A mesma instância do repositório é compartilhada entre as rotas, garantindo consistência
A estrutura está preparada para expansão com banco de dados real e outros módulos do monolito
👩‍💻 Autora

Julia Souza
🚀 Desafio Full Cycle - Sistema Monolítico
