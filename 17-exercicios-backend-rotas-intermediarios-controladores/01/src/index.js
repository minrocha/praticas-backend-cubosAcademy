const express = require('express');
const app = express();
const operacoes = require('./controladores/operacoes');
const { somar, subtrair, multiplicar, dividir } = operacoes;

app.get('/somar', somar);

app.get('/subtrair', subtrair);

app.get('/multiplicar', multiplicar);

app.get('/dividir', dividir);

app.listen(8000, () => {
  console.log(`Servidor iniciado na porta 8000`);
});
