function solucao(texto) {
  // Seu codigo aqui
  if(texto == '') console.log(0)
  else {
      let arrayDePalavrasDoTexto = [];
      let stringFormatada;

      stringFormatada = texto.replaceAll(',', '').replaceAll('.', '').trim().split(' ')
      for(let palavra of stringFormatada) {
        if(palavra != '') {
           arrayDePalavrasDoTexto.push(palavra)
        }
      }
      console.log(arrayDePalavrasDoTexto.length)
  }
}

function processData(input) {
	solucao(input)
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