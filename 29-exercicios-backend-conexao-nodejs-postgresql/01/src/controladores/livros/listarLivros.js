const pool = require('../../conexao');

const listarLivros = async (req, res) => {
  try {
    const id = 1;

    const livros = await pool.query(
      "select l.id, l.nome, l.genero, l.editora, l.data_publicacao, JSON_AGG(json_build_object( 'id', a.id, 'nome', a.nome, 'idade', a.idade)) as autor from autores as a join livros as l on l.autor_id = a.id group by l.id, l.nome, l.genero, l.editora, l.data_publicacao"
    );

    console.log(livros);
    return res.status(200).json(livros.rows);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

module.exports = listarLivros;
