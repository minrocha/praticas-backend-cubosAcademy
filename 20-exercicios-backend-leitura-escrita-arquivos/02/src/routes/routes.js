const express = require('express');

const { listPokemons, detailPokemon } = require('../controllers/pokemons');
const routes = express();

routes.get('/pokemon', listPokemons);

routes.get('/pokemon/:idOrName', detailPokemon);

module.exports = routes;
