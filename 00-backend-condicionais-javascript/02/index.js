const jogada1 = 5;
const jogada2 = 73;

//seu código aqui
let resultado;

const parOuImpar = (jogada1, jogada2) => {
  let somaJogadas = jogada1 + jogada2;

  if (somaJogadas % 2 == 0) return 'par';
  else return 'ímpar';
};

resultado = parOuImpar(jogada1, jogada2);
console.log(resultado);

const jogada3 = 7;
const jogada4 = 4;

resultado = parOuImpar(jogada3, jogada4);
console.log(resultado);
