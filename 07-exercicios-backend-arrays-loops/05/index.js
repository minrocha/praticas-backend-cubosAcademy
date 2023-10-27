const original = [1, 4, 12, 21, 53, 88, 112];

const ePar = valor => valor % 2 == 0;

let somentePares = original.filter(ePar);

console.log(somentePares);
