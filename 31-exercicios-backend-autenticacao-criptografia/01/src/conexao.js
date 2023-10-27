const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'passwd',
  database: 'catalago_pokemons',
});

module.exports = pool;
