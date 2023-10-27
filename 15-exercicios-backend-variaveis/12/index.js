let taxaJuros = 0;
let montante = 90000;
let capitalInicial = 60000;
let numeroMeses = 24;

taxaJuros = (Math.pow(montante / capitalInicial, 1 / numeroMeses) - 1) * 100;

console.log(
  `O seu financiamento de ${capitalInicial} reias teve uma taxa de juros de ${taxaJuros.toFixed(
    3
  )}%, pois após ${numeroMeses} meses você teve que pagar ${montante} reais.`
);
