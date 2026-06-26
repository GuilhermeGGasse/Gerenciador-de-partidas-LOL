import express from 'express';
import type { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app: Application = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'LoL Champions API rodando!' 
  });
});

export default app;
