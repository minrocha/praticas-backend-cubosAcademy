const fs = require('fs/promises');
const { buscarEndereco } = require('utils-playground');

const listAdress = async (req, res) => {
  try {
    let adresses = await fs.readFile('./src/data/adresses.json');
    adresses = JSON.parse(adresses);
    let { cep } = req.params;
    cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
    let addressFound = adresses.find(address => {
      return address.cep === cep;
    });

    if (addressFound) {
      return res.status(200).json(addressFound);
    }

    addressFound = await buscarEndereco(cep);

    if (addressFound.erro === true) {
      return res.status(400).send('CEP inválido');
    }
    console.log(addressFound);
    let registeredAdresses = await fs.readFile('./src/data/adresses.json');
    registeredAdresses = JSON.parse(registeredAdresses);

    registeredAdresses.push(addressFound);

    registeredAdresses = JSON.stringify(registeredAdresses);

    await fs.writeFile('./src/data/adresses.json', registeredAdresses);

    return res
      .status(200)
      .send(`Endereço de cep: ${cep} cadastrado com sucesso`);
  } catch (err) {
    return res.status(200).send(`ERROR: ${err}`);
  }
};

module.exports = { listAdress };
