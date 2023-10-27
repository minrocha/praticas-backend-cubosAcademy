let populacaoInicial = 1000;
let taxaInfeccao = 4;
let tempoDecorrido = 7;

let p = 0;

p = populacaoInicial * taxaInfeccao ** (tempoDecorrido / 7);

console.log(
  `Após ${tempoDecorrido} dias, o total de pessoas infectadas será de ${p.toFixed(
    0
  )}, uma vez que inicialmente existiam ${populacaoInicial} pessoas infectadas.`
);
