const numeros = [3, 24, 1, 8, 11, 7, 15];

const encontraMaior = (a, b) => {
  return Math.max(a, b);
};

let maiorValor = numeros.reduce(encontraMaior);

console.log(maiorValor);
