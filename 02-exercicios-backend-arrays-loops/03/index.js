const numeros = [10, , 14, 87, 10, 284];

// let temNumero10 = false;
// for (let indice in numeros) {
//   if (numeros[indice] == 10) {
//     console.log(indice);
//     temNumero10 = true;
//   }
// }
// if (!temNumero10) console.log('-1');

let arrayCom10 = [];
const e10 = (valor, i) => {
  if (valor == 10) arrayCom10.push(i);
};
numeros.filter(e10);
for (let num of arrayCom10) console.log(num);
