🧾 Módulo de Invoice (Nota Fiscal)

Este módulo implementa o domínio de geração e consulta de notas fiscais no padrão DDD conforme o desafio da FullCycle.

🏗️ Estrutura
src/
├── domain/
│   ├── entity/
│   ├── value-object/
│   └── repository/
├── usecase/
│   ├── generate-invoice/
│   └── find-invoice/
├── facade/
├── factory/
└── infra/
    └── db/
        └── invoice-repository.memory.ts
tests/

📦 Entidades

**Invoice**
* id: string
* name: string
* document: string
* address: Address (Value Object)
* items: InvoiceItem[]
* createdAt: Date
* updatedAt: Date

**InvoiceItem**
* id: string
* name: string
* price: number

**Address (VO)**
* street, number, complement, city, state, zipCode

🧠 Use Cases
**GenerateInvoiceUseCase**
* Recebe dados do cliente e produtos
* Retorna nota fiscal com total calculado

**FindInvoiceUseCase**
* Busca uma nota fiscal pelo id

🎯 DTOs
**Entrada - Generate**

interface GenerateInvoiceUseCaseInputDto {
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  items: { id: string; name: string; price: number }[];
}

**Saída - Generate**

interface GenerateInvoiceUseCaseOutputDto {
  id: string;
  name: string;
  document: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  items: { id: string; name: string; price: number }[];
  total: number;
}

🧪 Testes
**Executar:**
npm test

**Testa os fluxos:**
* Gerar invoice com múltiplos produtos
* Buscar invoice e validar total, dados do cliente e endereço

🧰 Facade
A InvoiceFacade centraliza o uso dos casos de uso (generate e find) com uma interface simples.

const facade = InvoiceFacadeFactory.create();

const result = await facade.generate(input);
const invoice = await facade.find({ id: result.id });

🚀 Executar localmente
1. Instale dependências:
npm install

2. Rode os testes:
npm test