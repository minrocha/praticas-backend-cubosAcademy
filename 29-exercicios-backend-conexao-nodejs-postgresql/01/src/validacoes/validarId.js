const validarId = id => {
  if (isNaN(Number(id)) || id.trim() === '') return false;

  return true;
};

module.exports = validarId;
