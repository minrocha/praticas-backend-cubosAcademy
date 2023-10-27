const data1 = new Date(1994, 0, 7);

const formataDataA = data => {
  const configuracoes = { year: 'numeric', month: 'long', day: '2-digit' };

  return data.toLocaleDateString('pt-BR', configuracoes);
};

const formataDataB = data => {
  const configuracoes = { year: 'numeric', month: '2-digit', day: '2-digit' };

  return data.toLocaleDateString('pt-BR', configuracoes);
};

const formataDataC = data => {
  const configuracoes = { day: 'numeric', month: 'short' };

  return data.toLocaleDateString('pt-BR', configuracoes).replace('.', '');
};

const formataDataD = data => {
  const configuracoes = { year: 'numeric', month: 'short', day: '2-digit' };

  return data
    .toLocaleDateString('pt-BR', configuracoes)
    .replace(' de', '')
    .replace('. de', '');
};

const formataDataE = data => {
  const configuracoes = { year: 'numeric', month: 'short', day: '2-digit' };

  return data.toLocaleDateString('pt-BR', configuracoes).replace('.', '');
};

const formataDataF = data => {
  const configuracoes = { day: '2-digit', month: 'short' };

  return data.toLocaleDateString('pt-BR', configuracoes).replace(' de ', '/');
};

console.log(formataDataA(data1));
console.log(formataDataB(data1));
console.log(formataDataC(data1));
console.log(formataDataD(data1));
console.log(formataDataE(data1));
console.log(formataDataF(data1));
