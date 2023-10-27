let numeroLados = 6;
let somaAngulosInternos = 0;
let valorAngulo = 0;

somaAngulosInternos = (numeroLados - 2) * 180;

valorAngulo = somaAngulosInternos / numeroLados;

console.log(
  `O valor da soma dos ângulos internos S é ${somaAngulosInternos}, e o valor de cada ângulo é igual a ${valorAngulo}. Os valores informados são referentes a um polígono de ${numeroLados} lados.`
);
