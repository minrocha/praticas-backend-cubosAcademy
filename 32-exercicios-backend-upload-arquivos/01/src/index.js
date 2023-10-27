require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(PORT, () => console.log(`Servidor inicado na porta ${PORT}`));
