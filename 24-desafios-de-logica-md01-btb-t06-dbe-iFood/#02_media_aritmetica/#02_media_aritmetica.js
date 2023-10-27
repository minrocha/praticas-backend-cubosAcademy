const aportes = [2, 3, 4];

function solucao(lista) {
  //seu codigo aqui
  const mediaAportes = (lista.reduce((acc, valor) => {
    return acc += valor;
  })) / lista.length;

  console.log(mediaAportes);
}

solucao(aportes);