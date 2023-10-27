const arrayA = [5, 32, 3, 44, 1];
const arrayB = [1, 3, 3, 44, 11];

for (let indice in arrayA)
  console.log(Math.min(arrayA[indice], arrayB[indice]));
