const express = require('express');
const cadastrarUsaurio = require('./controladores/cadastrarUsuario');
const enviarNewsletter = require('./controladores/newsletters');

const rotas = express();

rotas.post('/usuario', cadastrarUsaurio);

rotas.post('/enviar', enviarNewsletter);

module.exports = rotas;
