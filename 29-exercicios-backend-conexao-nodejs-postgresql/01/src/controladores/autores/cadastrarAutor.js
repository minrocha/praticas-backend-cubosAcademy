const cadastrarNoBd = require('../../utils/cadastrarNoBd');
const validarInformacoes = require('../../utils/validarInformacoes');

const cadastrarAutor = (req, res) => {
  try {
    const { nome, idade } = req.body;
    validarInformacoes(req, res, nome, idade);
    const dados = {
      nome,
      idade,
    };
    cadastrarNoBd(req, res, 0, dados);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = cadastrarAutor;
