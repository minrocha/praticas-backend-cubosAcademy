const pool = require('../conexao');
const jwt = require('jsonwebtoken');

const encontrarUsuario = require('../utils/encontrarusuario');

const senhaJwt = require('../validacoes/senhaJwt');

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ mensagem: 'Não autorizado' });

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, senhaJwt);

    const usuario = await encontrarUsuario(id, req, res);

    if (!usuario) return;

    next();
  } catch (error) {
    return res.status(401).json({ mensagem: 'Não autorizado' });
  }
};

module.exports = verificarUsuarioLogado;
