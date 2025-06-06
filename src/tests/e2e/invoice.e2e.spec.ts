import request from 'supertest';
import app from '../../api/server';
import { InvoiceFacadeFactory } from '../../factory/invoice-facade.factory';

describe("Invoice API E2E", () => {
  it("should return 404 for non-existent invoice", async () => {
    const response = await request(app).get('/invoice/nonexistent-id');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("Invoice not found");
  });

  it("should create and retrieve an invoice", async () => {
    const facade = InvoiceFacadeFactory.create();

    const input = {
      name: "Cliente Teste",
      document: "99999999999",
      street: "Rua XPTO",
      number: "123",
      complement: "Apto 2",
      city: "SP",
      state: "SP",
      zipCode: "00000-000",
      items: [
        { id: "1", name: "Produto A", price: 100 },
        { id: "2", name: "Produto B", price: 200 }
      ]
    };

    const invoiceCreated = await facade.generate(input);

    const response = await request(app).get(`/invoice/${invoiceCreated.id}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(invoiceCreated.id);
    expect(response.body.total).toBe(300);
    expect(response.body.items).toHaveLength(2);
  });
});
