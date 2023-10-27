const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const encontrarUsuario = require('../../utils/encontrarusuario');

const senhaJwt = require('../../validacoes/senhaJwt');

const logarUsuario = async (req, res) => {
  const { email, password: senha } = req.body;

  try {
    const usuario = await encontrarUsuario(email, req, res);

    if (!usuario) return;

    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha);

    if (!senhaValida)
      return res.status(400).json({ mensagem: 'Email ou senha inválidos' });

    const token = jwt.sign({ id: usuario.rows[0].id }, senhaJwt, {
      expiresIn: '8h',
    });

    const { senha: _, ...usuarioLogado } = usuario.rows[0];

    return res.json({ usuario: usuarioLogado, token });
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = logarUsuario;
