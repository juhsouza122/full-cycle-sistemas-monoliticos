"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_facade_factory_1 = require("../factory/invoice-facade.factory");
describe("InvoiceFacade", () => {
    it("should generate an invoice", async () => {
        const facade = invoice_facade_factory_1.InvoiceFacadeFactory.create();
        const input = {
            name: "João da Silva",
            document: "12345678900",
            street: "Rua A",
            number: "123",
            complement: "Apto 1",
            city: "São Paulo",
            state: "SP",
            zipCode: "12345-678",
            items: [
                { id: "1", name: "Produto A", price: 100 },
                { id: "2", name: "Produto B", price: 200 },
            ],
        };
        const output = await facade.generate(input);
        expect(output.total).toBe(300);
        expect(output.name).toBe("João da Silva");
        expect(output.items.length).toBe(2);
    });
    it("should find an invoice", async () => {
        const facade = invoice_facade_factory_1.InvoiceFacadeFactory.create();
        const input = {
            name: "Maria",
            document: "98765432100",
            street: "Rua B",
            number: "456",
            complement: "Casa",
            city: "Rio",
            state: "RJ",
            zipCode: "22222-222",
            items: [{ id: "1", name: "Produto X", price: 500 }],
        };
        const generated = await facade.generate(input);
        const found = await facade.find({ id: generated.id });
        expect(found.id).toBe(generated.id);
        expect(found.total).toBe(500);
    });
});
