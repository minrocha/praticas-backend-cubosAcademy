const express = require('express');
const jogadores = require('./jogadores');

const app = express();

let indice = 0;

const jogadorDaVez = () => {
  console.log(`É a vez de ${jogadores[indice]} jogar!`);
  indice >= jogadores.length - 1 ? (indice = 0) : indice++;
};

app.get('/', (req, res) => {
  res.send(jogadorDaVez());
});

app.listen(3000);
