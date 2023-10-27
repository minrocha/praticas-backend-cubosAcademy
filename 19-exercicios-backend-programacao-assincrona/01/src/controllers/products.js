const products = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground');

const listProducts = async (req, res) => {
  return await res.status(200).json(products);
};

const listSpecificProduct = async (req, res) => {
  const params = req.params;
  const id = params.idProduct;

  if (isNaN(id)) {
    return res.status(404).send({
      message: 'O valor do parâmetro ID da URL não é um número válido.',
    });
  }

  const productFound = await products.find(product => {
    return product.id === Number(id);
  });

  if (!productFound) {
    return res.status(404).json({
      message: 'Não existe produto cadastrado para o id informado.',
    });
  }

  return await res.status(200).json(productFound);
};

const calculateShipping = async (req, res) => {
  const { idProduct, cep } = req.params;

  let CostOfFreight = 0;

  const productFound = await products.find(product => {
    return product.id === Number(idProduct);
  });

  if (!productFound) {
    return await res.status(404).json({
      message: 'Não existe produto cadastrado para o id informado.',
    });
  }

  const uf = await getStateFromZipcode(cep);

  if (uf === 'BA' || uf === 'SE' || uf === 'AL' || uf === 'PE' || uf === 'PB') {
    CostOfFreight = productFound.valor * 0.1;
  } else if (uf === 'SP' || uf === 'RJ') {
    CostOfFreight = productFound.valor * 0.15;
  } else {
    CostOfFreight = productFound.valor * 0.12;
  }

  const shippingInformation = {
    product: {
      id: productFound.id,
      name: productFound.id,
      value: productFound.valor,
    },
    state: uf,
    freight: CostOfFreight,
  };

  return await res.status(200).json(shippingInformation);
};

module.exports = { listProducts, listSpecificProduct, calculateShipping };
