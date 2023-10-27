const express = require('express');
const cadastrarAutor = require('./controladores/autores/cadastrarAutor');
const buscarAutor = require('./controladores/autores/buscarAutor');
const cadastrarLivro = require('./controladores/livros/cadastrarLivro');
const listarLivros = require('./controladores/livros/listarLivros');

const rotas = express();

rotas.get('/autor/:id', buscarAutor);
rotas.post('/autor', cadastrarAutor);

rotas.get('/livro', listarLivros);
rotas.post('/autor/:id/livro', cadastrarLivro);

module.exports = rotas;
