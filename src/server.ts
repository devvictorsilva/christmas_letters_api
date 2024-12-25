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

async function main() {
  try {
      const prisma = new PrismaClient();
      await prisma.$connect(); // Conecta explicitamente ao banco de dados
      
      // Seus queries e operações no banco de dados
      const users = await prisma.user.findMany();
      console.log(users);

      await prisma.$disconnect();
      
  } catch (error) {
      if (error instanceof Error && error.constructor.name === 'PrismaClientInitializationError') {
          console.error('Erro de Inicialização do Prisma:', error);
         
      } else {
         console.error('Erro não tratado:', error);
      }
  }
}

main();

app.listen(port, () => `server running on port ${port}`);
