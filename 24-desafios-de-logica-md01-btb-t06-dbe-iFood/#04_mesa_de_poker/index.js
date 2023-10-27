const valores1 = [0, 5, 6, 10, 11];
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solucao(min, max, valores) {
  //seu codigo aqui
  console.log(valores.filter((valor) => {
    if(valor >= min && valor <= max) return valor;
  }));
}

solucao(5, 10, valores1)