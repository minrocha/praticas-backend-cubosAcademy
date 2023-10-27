const validarNome = require('../validacoes/validarNome');
const validarId = require('../validacoes/validarId');
const pool = require('../conexao');

const validarInformacoes = async (
  req,
  res,
  nome = undefined,
  idade = undefined,
  id = undefined,
  autor_id = undefined
) => {
  try {
    let contadorErros = 1;
    let erros = `Seguintes erros encontrados:`;
    if (nome != undefined) {
      if (!validarNome(nome)) {
        erros = `${erros} ${contadorErros} - O campo nome é obrigatório;`;
        contadorErros++;
      }
    }

    if (id != undefined) {
      if (!validarId(id)) {
        erros = `${erros} ${contadorErros} - O id informado é inválido;`;
        contadorErros++;
      }
    }

    if (autor_id != undefined) {
      if (!validarId(autor_id)) {
        erros = `${erros} ${contadorErros} - O id do autor informado é inválido;`;
        contadorErros++;
      }
      const autorEncontrado = await pool.query(
        'select nome from autores where id = $1',
        [autor_id]
      );

      if (!autorEncontrado.rows.length) {
        erros = `${erros} ${contadorErros} - Não existe autor cadastrado para o autor_id informado;`;
        contadorErros++;
      }
    }
    if (erros.trim() != `Seguintes erros encontrados:`) {
      res.status(400).json(erros);
      return false;
    }
  } catch (error) {
    return res.send(error);
  }
};

module.exports = validarInformacoes;
