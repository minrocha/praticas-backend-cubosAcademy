const pool = require('../../conexao');
const validarInformacoes = require('../../utils/validarInformacoes');

const buscarAutor = async (req, res) => {
  const { id } = req.params;

  try {
    if (
      (await validarInformacoes(
        req,
        res,
        undefined,
        undefined,
        id,
        undefined
      )) == false
    )
      return;

    const queryBuscarAutor = await pool.query(
      'select id, nome, idade from autores where id = $1',
      [id]
    );

    if (!queryBuscarAutor.rows[0])
      return res.status(400).json({ mensagem: 'Autor não encontrado' });

    const autorComLivros = await pool.query(
      "select a.id, a.nome, a.idade, JSON_AGG(json_build_object( 'id', l.id, 'nome', l.nome, 'genero', l.genero, 'editora', l.editora, 'data_publicacao', l.data_publicacao)) as livros from autores as a join livros as l on l.autor_id = a.id where a.id = $1 group by a.id, a.nome, a.idade",
      [id]
    );

    return res.status(200).json(autorComLivros.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = buscarAutor;
