const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

let fimWhile = 0;

for (let valor of original) {
  valor % 2 ? impares.push(valor) : pares.push(valor);
}

for (let i = 0; i < 2; i++) {
  i % 2 ? console.log(pares) : console.log(impares);
}

while (1) break; // \m/_d-,b_\m/
