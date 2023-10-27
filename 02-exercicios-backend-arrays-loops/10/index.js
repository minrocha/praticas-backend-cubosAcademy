const numeros = [18, 3, 10, 7];
let arrayDiferencas = [];

let maiorNumero = 0;
let menorNumero;

let maiorDiferença;

for (let numero of numeros) {
  if (numero > maiorNumero) maiorNumero = numero;
}

menorNumero = maiorNumero;

for (let numero of numeros) {
  if (numero <= menorNumero) menorNumero = numero;
}

maiorDiferença = maiorNumero - menorNumero;

console.log(maiorDiferença);
