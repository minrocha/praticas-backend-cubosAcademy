const express = require('express');
const routes = require('./routes');
const { validatePassword } = require('./middlewares');

const app = express();

const port = 3000;

app.use(validatePassword);

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
