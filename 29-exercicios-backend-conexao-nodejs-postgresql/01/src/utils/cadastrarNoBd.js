const pool = require('../conexao');

const cadastrarNoBd = async (req, res, tipo, dados) => {
  try {
    switch (tipo) {
      case 0:
        {
          const { nome, idade } = dados;
          const params = [nome, idade];

          const queryInserir =
            'insert into autores (nome, idade) values ($1, $2);';

          await pool.query(queryInserir, params);

          const author = await pool.query(
            `select id, nome, idade from autores where nome = $1`,
            [nome]
          );

          const resultado = {
            id: author.rows[0].id,
            nome: author.rows[0].nome,
            idade: author.rows[0].idade,
          };
          return res.json(resultado);
        }
        break;
      case 1:
        {
          const { nome, genero, editora, data_publicacao, autor_id } = dados;

          const params = [nome, genero, editora, data_publicacao, autor_id];

          const queryInserir =
            'insert into livros (nome, genero, editora, data_publicacao, autor_id) values ($1, $2, $3, $4, $5)';

          await pool.query(queryInserir, params);

          const livro = await pool.query(
            'select id, nome, genero, editora, cast(data_publicacao as date) from livros where nome = $1',
            [nome]
          );

          const resultado = {
            id: livro.rows[0].id,
            nome: livro.rows[0].nome,
            genero: livro.rows[0].genero,
            editora: livro.rows[0].editora,
            data_publicacao: livro.rows[0].data_publicacao,
          };

          return res.json(resultado);
        }
        break;
    }
  } catch (error) {
    return res.status(400).json(error.detail);
  }
};

module.exports = cadastrarNoBd;
