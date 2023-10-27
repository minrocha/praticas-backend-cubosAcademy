const express = require('express');
const rotas = require('./rotas');

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
