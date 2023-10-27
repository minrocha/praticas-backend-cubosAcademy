function solucao(carta) {
  //seu codigo aqui
  let manilha = '';
  switch(carta) {
    case 'Q':
      manilha = 'J'
      break;
    case 'J':
      manilha = 'K'
      break;
    case 'K':
      manilha = 'A'
      break;
    case 'A':
      manilha = '2'
      break;
    case '2':
      manilha = '3'
      break;
    case '3':
      manilha = 'Q'
      break;
  }
  console.log(manilha);
}

function processData(input) {
    solucao(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});