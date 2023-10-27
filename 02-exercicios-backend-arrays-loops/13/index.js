const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

for (let indice in disjuntores) {
  if (disjuntores[indice]) {
    console.log(indice);
  }
}
