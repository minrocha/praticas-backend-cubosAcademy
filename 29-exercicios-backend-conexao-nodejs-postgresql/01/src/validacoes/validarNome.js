const validarNome = nome => {
  if (!nome.trim()) return false;

  return true;
};

module.exports = validarNome;
