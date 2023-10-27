const express = require('express');

const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuario');
const validate = require('./intermediarios/validation');
const logarUsuario = require('./controladores/usuarios/logarusuario');
const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const cadastrarPokemon = require('./controladores/pokemons/cadastrarPokemon');

const rotas = express();

rotas.post('/usuario', validate, cadastrarUsuario);
rotas.post('/login', logarUsuario);

rotas.use(verificarUsuarioLogado);

rotas.post('/pokemon', cadastrarPokemon);

module.exports = rotas;
