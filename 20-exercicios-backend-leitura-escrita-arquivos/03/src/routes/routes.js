const express = require('express');
const { listAdress } = require('../controllers/enderecos');
const routes = express();

routes.use('/adresses/:cep', listAdress);

module.exports = routes;
