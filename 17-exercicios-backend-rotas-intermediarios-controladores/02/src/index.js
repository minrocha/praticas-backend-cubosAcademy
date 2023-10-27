const express = require('express');
const app = express();
const {
  exibirJodadorAtual,
  removerJogador,
  adicionarJogador,
} = require('./controladores/jogadores');

app.get('/', exibirJodadorAtual);

app.get('/remover', removerJogador);

app.get('/adicionar', adicionarJogador);

app.listen(8000, () => {
  console.log(`Servidor inicado na porta 8000`);
});
