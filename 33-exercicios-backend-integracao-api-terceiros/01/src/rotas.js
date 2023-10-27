const express = require('express');
const buscarEmpresa = require('./controladores/empresas');

const rotas = express();

rotas.get('/empresas', buscarEmpresa);
module.exports = rotas;
