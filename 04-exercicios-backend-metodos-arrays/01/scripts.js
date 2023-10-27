const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// letra a
// console.log(frutas.reverse().join(', '));

frutas.shift();
frutas.splice(frutas.length - 1, 1, 'Melão');
console.log(frutas);
