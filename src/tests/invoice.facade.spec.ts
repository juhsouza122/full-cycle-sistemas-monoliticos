import { InvoiceFacadeFactory } from "../factory/invoice-facade.factory";

describe("InvoiceFacade", () => {
  it("should generate and find an invoice", async () => {
    const facade = InvoiceFacadeFactory.create();

    const input = {
      name: "Maria",
      document: "12345678900",
      street: "Rua Exemplo",
      number: "100",
      complement: "Apto 1",
      city: "SP",
      state: "SP",
      zipCode: "12345-000",
      items: [
        { id: "1", name: "Produto 1", price: 100 },
        { id: "2", name: "Produto 2", price: 200 }
      ]
    };

    const output = await facade.generate(input);

    expect(output.total).toBe(300);

    const invoice = await facade.find({ id: output.id });
    expect(invoice.name).toBe("Maria");
    expect(invoice.items.length).toBe(2);
  });
});
