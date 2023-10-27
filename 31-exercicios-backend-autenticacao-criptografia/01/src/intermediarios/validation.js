const schemaUser = require('../validacoes/schemaUser');
const validationRegex = require('../validacoes/validationRegex');

const validate = (req, res, next) => {
  const { body } = req;

  const errors = [];

  try {
    Object.keys(schemaUser).forEach(item => {
      const itemSchema = schemaUser[item];

      if (itemSchema.required && !body[item].trim()) {
        errors.push(`Campo ${item} - ${itemSchema.required}`);
        return;
      } else {
        const regexItem = validationRegex[item];

        if (regexItem && !new RegExp(regexItem.regex).test(body[item]))
          errors.push(`Campo ${item} - O Formato inválido`);

        if (itemSchema.min && body[item].length < itemSchema.min)
          errors.push(`Campo ${item} - O tamanho mínimo é ${itemSchema.min}`);

        if (itemSchema.max && body[item].length > itemSchema.max)
          errors.push(`Campo ${item} - O tamanho máximo é ${itemSchema.max}`);
      }

      if (schemaUser.required == '') {
        const regexItem = validationRegex[item];
        if (regexItem && !new RegExp(regexItem.regex).test(body[item]))
          errors.push(`Campo ${item} - O Formato inválido`);

        if (itemSchema.min && body[item].length < itemSchema.min)
          errors.push(`Campo ${item} - O tamanho mínimo é ${itemSchema.min}`);

        if (itemSchema.max && body[item].length > itemSchema.max)
          errors.push(`Campo ${item} - O tamanho máximo é ${itemSchema.max}`);
      }
    });
  } catch (errors) {
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  next();
};

module.exports = validate;
