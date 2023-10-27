const fs = require('fs/promises');

const cadastrarUsaurio = async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome.trim()) return res.status(401).json('O campo NOME é obrigatório');

  if (!email.trim()) return res.status(401).json('O campo EMAIl é obrigatório');

  if (!senha.trim()) return res.status(401).json('O campo SENHA é obrigatório');

  const novoUsuario = {
    nome,
    email,
    senha,
  };

  try {
    let usuariosCadastrados = await fs.readFile('./src/database/usuarios.json');
    usuariosCadastrados = JSON.parse(usuariosCadastrados);

    usuariosCadastrados.push(novoUsuario);

    usuariosCadastrados = JSON.stringify(usuariosCadastrados);

    const novoUsuarioCadastrado = await fs.writeFile(
      './src/database/usuarios.json',
      usuariosCadastrados
    );

    return res.status(201).json(novoUsuario);
  } catch (error) {
    return res
      .status(500)
      .json({ Tipo: 'Erro interno do servidor', mensagem: error.message });
  }
};

module.exports = cadastrarUsaurio;
