const cadastrarNoBd = require('../../utils/cadastrarNoBd');
const validarInformacoes = require('../../utils/validarInformacoes');

const cadastrarLivro = (req, res) => {
  try {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id: autor_id } = req.params;

    if (
      validarInformacoes(req, res, nome, undefined, undefined, autor_id) ==
      false
    )
      return;

    const dados = {
      nome,
      genero,
      editora,
      data_publicacao,
      autor_id: Number(autor_id),
    };

    cadastrarNoBd(req, res, 1, dados);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = cadastrarLivro;
