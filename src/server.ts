import cors from 'cors';
import express from 'express';
import router from './routes';

const app = express();

app.use(express.json())

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(router)


app.listen(3333, () => 'server running on port 3333')
