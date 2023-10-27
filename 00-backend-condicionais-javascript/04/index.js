const ladoA = 5;
const ladoB = 5;

//seu código aqui
let nomeBuchas = ['branco', 'ás', 'duque', 'terno', 'quadra', 'quina', 'sena'];

const eBucha = (ladoA, ladoB) => {
  if (ladoA == ladoB) return `Bucha de ${nomeBuchas[ladoA]}`;
  else return `A Combinação de lados não forma uma bucha`;
};

console.log(eBucha(ladoA, ladoB));

const ladoC = 5;
const ladoD = 3;
console.log(eBucha(ladoC, ladoD));

const ladoE = 5;
const ladoF = 5;
console.log(eBucha(ladoE, ladoF));
