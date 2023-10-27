const express = require('express');
const routes = express();

const {
  listBooks,
  listSpecificBook,
  registerBook,
  updateBook,
  updateSpecificInfo,
  deleteBook,
} = require('../controllers/books');

routes.get('/books', listBooks);
routes.get('/books/:id', listSpecificBook);

routes.post('/books', registerBook);

routes.put('/books/:id', updateBook);

routes.patch('/books/:id', updateSpecificInfo);

routes.delete('/books/:id', deleteBook);

module.exports = routes;
