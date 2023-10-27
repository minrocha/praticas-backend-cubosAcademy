const instanciaAxios = require('../axios');
const fs = require('fs/promises');

const buscarEmpresa = async (req, res) => {
  const { dominioEmpresa } = req.query;

  // const options = { method: 'GET' };

  try {
    const { data: empresa } = await instanciaAxios.get(
      `/?domain=${dominioEmpresa}`
    );

    if (!empresa.name)
      return res.status(404).json({
        message: 'O domino informado não contém dados associados a ele',
      });

    let dadosEmpresas = await fs.readFile(
      './src/controladores/data/dadosEmpresas.json'
    );

    dadosEmpresas = JSON.parse(dadosEmpresas);

    dadosEmpresas.push(empresa);

    dadosEmpresas = JSON.stringify(dadosEmpresas);

    await fs.writeFile(
      './src/controladores/data/dadosEmpresas.json',
      dadosEmpresas
    );

    return res.json(empresa);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = buscarEmpresa;
