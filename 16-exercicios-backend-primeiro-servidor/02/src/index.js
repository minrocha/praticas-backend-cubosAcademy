const express = require('express');
const exibir = require('./principal');
const { iniciar } = require('./iniciar');

const app = express();

let segundos = 0;
let minutos = 0;

let interval;

let estadoCronometro = 'parado';

const defineContagem = () => {
  interval = setInterval(() => {
    if (segundos < 59) {
      segundos++;
      console.log(`Segundos: ${segundos}`);
    } else {
      segundos = 0;
      minutos++;
      console.log(`Minutos: ${minutos}`);
    }
  }, 150);
};

const zerarCronometro = () => {
  segundos = 0;
  minutos = 0;
};

const continuarCronometro = () => {
  if (estadoCronometro == 'pausado') {
    defineContagem();
  }
  estadoCronometro = 'executando';
};

const pausarCronometro = () => {
  clearInterval(interval);
  estadoCronometro = 'pausado';
};

const iniciarCronometro = () => {
  if (estadoCronometro == 'parado') {
    defineContagem();
    estadoCronometro = 'executando';
  }
};

app.get('/', (req, res) => {
  res.send(
    `Tempo atual do cronômetro: ${minutos
      .toString()
      .padStart(2, '0')} minutos e ${segundos
      .toString()
      .padStart(2, '0')} segundos`
  );
});

app.get('/iniciar', (req, res) => {
  iniciarCronometro();
  res.send(`Cronômetro iniciado`);
});

app.get('/pausar', (req, res) => {
  pausarCronometro();
  res.send(`Cromômetro pausado!`);
});

app.get('/continuar', (req, res) => {
  continuarCronometro();
  res.send(`Cronômetro continuado!`);
});

app.get('/zerar', (req, res) => {
  zerarCronometro();
  res.send(`Cronômetro zerado!`);
});

app.listen(8000, () => {
  console.log('Servidor iniciado na porta 8000.');
});
