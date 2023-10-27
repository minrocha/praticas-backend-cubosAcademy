const express = require('express');
const { createCharacters } = require('./controllers/createCharacters');
const routes = express();

routes.get('/', () => console.log('oi'));
routes.post('/character', createCharacters);

module.exports = routes;
