const pool = require('../../conexao');
const bcrypt = require('bcrypt');
const cadastrarUsuario = async (req, res) => {
  const { nome, email, password: senha } = req.body;

  try {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await pool.query(
      'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *',
      [nome, email, senhaCriptografada]
    );

    return res.status(201).send(novoUsuario.rows[0]);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = cadastrarUsuario;
