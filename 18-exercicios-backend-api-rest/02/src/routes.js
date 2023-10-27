const express = require('express');

const routes = express();

const {
  listGuests,
  registerGuest,
  deleteGuest,
} = require('./controllers/guests');

routes.get('/guests', listGuests);

routes.post('/guests', registerGuest);

routes.delete('/guests/:name', deleteGuest);

module.exports = routes;
