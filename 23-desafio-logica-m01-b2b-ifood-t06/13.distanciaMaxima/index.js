function processData(input) {
  //Enter your code here
  const arrayEntrada = input.split('\n');
  const [numeroFuncionarios] = arrayEntrada;
  const cordenadasFuncionarios = [];
  const distanciaEntreOsPontos = [];
  let maiorDistanciaEntreOsPontos = 0;

  for (let i = 1; i <= numeroFuncionarios; i++) {
    cordenadasFuncionarios.push(arrayEntrada[i].split(' '));
  }

  for (funcionario of cordenadasFuncionarios) {
    let indexFuncionario = cordenadasFuncionarios.indexOf(funcionario);
    const xAtualDeA = parseFloat(funcionario[0]);
    const yAtualDeA = parseFloat(funcionario[1]);

    for (let i = indexFuncionario + 1; i < cordenadasFuncionarios.length; i++) {
      const xAtualDeB = parseFloat(cordenadasFuncionarios[i][0]);
      const yAtualDeB = parseFloat(cordenadasFuncionarios[i][1]);

      distanciaEntreOsPontos.push(
        Math.sqrt(
          Math.pow(xAtualDeB - xAtualDeA, 2) +
            Math.pow(yAtualDeB - yAtualDeA, 2)
        )
      );
    }
  }

  maiorDistanciaEntreOsPontos = distanciaEntreOsPontos.reduce(
    (a, b) => Math.max(a, b),
    0
  );

  console.log(maiorDistanciaEntreOsPontos.toFixed(15));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
