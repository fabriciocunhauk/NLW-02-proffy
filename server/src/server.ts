import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informacao
// POST: Criar alguma nova informacao
// PUT: Atualizar uma informacao existente
// DELETE: deletar uma informacap existente

// Corpo (Request Body) Dados para criacao ou atualizacao de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginacao, filtros, ordenacao

app.listen(3333, () => {
    console.log("connected on port 3333");
});