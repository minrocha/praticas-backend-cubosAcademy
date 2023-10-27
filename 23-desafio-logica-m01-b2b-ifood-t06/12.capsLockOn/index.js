function processData(input) {
  let todasMaiusculas = input === input.toUpperCase();
  let primeiraMinusculaDemaisMaiusculas =
    input[0] === input[0].toLowerCase() &&
    input.slice(1) === input.slice(1).toUpperCase();

  if (todasMaiusculas) {
    console.log(input.toLowerCase());
  } else if (primeiraMinusculaDemaisMaiusculas) {
    input = input.split('');
    input = input.map(letra => {
      return letra === letra.toUpperCase()
        ? letra.toLowerCase()
        : letra.toUpperCase();
    });
    input = input.join('');
    console.log(input);
  } else {
    console.log(input);
  }
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
