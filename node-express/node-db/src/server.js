import 'dotenv/config';
import express from 'express';
import routes from './routes';

const porta = process.env.PORTA_API;
const app = express();

app.use(express.json());

routes(app);

app.listen(porta, () => console.log(`Servidor rodando no link http://localhost:${porta}`));