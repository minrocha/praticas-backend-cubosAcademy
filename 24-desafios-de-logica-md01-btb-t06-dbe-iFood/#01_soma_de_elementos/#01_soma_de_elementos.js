const aportes = [1, 2, 3, 4, 5, 3, 2, 8, 1, 1];

function solucao(lista) {
  //seu codigo aqui
  console.log(lista.reduce((acc, valor)=>{
    return acc += valor;
  })); 
}

solucao(aportes)