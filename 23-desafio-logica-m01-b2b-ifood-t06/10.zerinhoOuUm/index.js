
function solucao(jogadores) {
  //seu codigo aqui
    let quantidadeJogadasZero = 0;
    let quantidadeJogadasUm = 0;
    
    for(let jogador of jogadores) {
        jogador.jogada == 0 ? quantidadeJogadasZero++ : quantidadeJogadasUm++;
    }
    
    if(quantidadeJogadasUm === 1) {
        for(let jogador of jogadores) {
            if(jogador.jogada === 1) {
                console.log(jogador.nome);            
            }
        }
    }else if(quantidadeJogadasZero === 1) {
        for(let jogador of jogadores) {
            if(jogador.jogada === 0) {
                console.log(jogador.nome);            
            }
        }
    } else {
        console.log('NINGUEM')
    }
}

function processData(input) {
	solucao(JSON.parse(input));
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
