/*
  require
  min
  max
  tipo
*/

const schemaUser = {
  nome: {
    type: 'text',
    required: 'O campo NOME é obrigatório',
  },
  email: {
    type: 'email',
    required: 'O campo EMAIl é obrigatório',
  },
  password: {
    type: 'text',
    min: 6,
    max: 12,
    required: 'O campo SENHA é obrigatório',
  },
};

module.exports = schemaUser;
