const express = require('express');
const rotas = require('./roteador');
const app = express();

const porta = 8000;

app.use('/', rotas);

app.listen(porta, () => {
  console.log(`Servidor iniciado na porta ${porta}`);
});
