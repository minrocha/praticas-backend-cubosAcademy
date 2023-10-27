const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let novoArray = original.filter(
  valor => (valor >= 10 && valor <= 20) || valor > 100
);

console.log(novoArray);
