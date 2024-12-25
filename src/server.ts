import cors from 'cors';
import express from 'express';
import router from './routes';

const { PrismaClient } = require('@prisma/client'); 

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json())

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(router)

app.listen(port, () => `server running on port ${port}`);
