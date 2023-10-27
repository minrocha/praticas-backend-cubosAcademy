let montante = 0;

let capital = 1000.0;
let taxaJuros = 0.125;
let tempo = 5;

montante = capital * (1 + taxaJuros) ** tempo;

console.log(
  `Um capital de R$${capital} aplicado durante ${tempo} meses no sistema de juros composto sob uma taxa mensal fixa de ${
    taxaJuros * 100
  }%, ao final do período será de R$${montante.toFixed(0)},00.`
);
