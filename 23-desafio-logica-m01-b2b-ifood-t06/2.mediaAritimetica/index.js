function solucao(lista) {
  //seu codigo aqui
  const mediaAportes = (lista.reduce((acc, valor) => {
    return acc += valor;
  })) / lista.length;
  console.log(mediaAportes);
}

function processData(input) {
  	const strings = input.split(" ");
    const numeros = [];
	for(let i = 0; i < strings.length; i++) {
    	  numeros.push(parseInt(strings[i] ,10));
  	}
    solucao(numeros);
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