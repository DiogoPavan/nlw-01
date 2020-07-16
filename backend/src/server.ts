import 'dotenv/config';
import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(process.env.APP_PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.APP_PORT}`);
});
