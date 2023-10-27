const pool = require('../conexao');

const encontrarUsuario = async (identificador, req, res) => {
  try {
    let usuarioEncontrado = '';

    if (typeof identificador == 'number') {
      usuarioEncontrado = await pool.query(
        'select * from usuarios where id = $1',
        [identificador]
      );
    }

    if (typeof identificador == 'string') {
      usuarioEncontrado = await pool.query(
        'select * from usuarios where email = $1',
        [identificador]
      );
    }

    if (usuarioEncontrado.rowCount < 1) {
      res.status(404).json({ mensagem: 'Email ou senha inválidos' });
      return false;
    }

    return usuarioEncontrado;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = encontrarUsuario;
