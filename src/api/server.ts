import express, { Request, Response } from 'express';
import invoiceRoutes from './routes/invoice.routes';
import sharedFacade from '../config/shared-invoice-facade';

const app = express();
app.use(express.json());

// ✅ Usa o mesmo facade compartilhado entre todas as rotas
app.use('/invoice', invoiceRoutes(sharedFacade)); 

// 🔽 Rotas mockadas — criam produto/cliente (ainda não implementados)
app.post('/products', (_req: Request, res: Response) => {
  res.status(201).json({ message: 'Produto criado!' });
});

app.post('/clients', (_req: Request, res: Response) => {
  res.status(201).json({ message: 'Cliente criado!' });
});

// ✅ Checkout funcional: cria invoice
app.post('/checkout', async (req: Request, res: Response) => {
  try {
    const invoice = await sharedFacade.generate(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

export default app;
