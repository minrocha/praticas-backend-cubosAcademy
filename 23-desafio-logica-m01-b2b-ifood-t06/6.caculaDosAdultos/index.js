
function solucao(lista) {
  // seu codigo aqui
  const possuiMaiorIdade = lista.some(valor => {
    return valor >= 18;
  })

  if(!possuiMaiorIdade) {
    console.log('CRESCA E APARECA');
    return
  } else {
    const menorIDadePermitida = lista.reduce((atual, prox) => {
      if(prox >= 18) return atual < prox ? atual : prox;
      else return atual;
    }, Infinity)
    console.log(menorIDadePermitida);
  }
}

function processData(input) {
    //Enter your code here
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
