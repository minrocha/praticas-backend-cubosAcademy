const express = require('express');
const routes = express();

const {
  listProducts,
  listSpecificProduct,
  calculateShipping,
} = require('../controllers/products');

routes.get('/products', listProducts);

routes.get('/products/:idProduct', listSpecificProduct);

routes.get('/products/:idProduct/frete/:cep', calculateShipping);

module.exports = routes;
