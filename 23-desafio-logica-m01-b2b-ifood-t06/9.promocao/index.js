
function solucao(precos) {
  //seu codigo aqui
    const quantidadeDeItens = precos.length;
    
    if(quantidadeDeItens <= 2) {
        console.log(precos.reduce((acc, valor) => {
            return acc += valor;
        }))
    } else {
        let somaValores = 0;
        const itemDeMenorValor = precos.reduce((atual, prox) => {
            return atual < prox ? atual : prox;
        }, Infinity);
        
        for(let i = 0; i < precos.length; i++) {
            somaValores += precos[i];
        }
        somaValores = (somaValores - itemDeMenorValor) + (itemDeMenorValor / 2);
        console.log(somaValores)
    }
}



function processData(input) {
  const lista = input.split(" ");
  lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
  solucao(lista);
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