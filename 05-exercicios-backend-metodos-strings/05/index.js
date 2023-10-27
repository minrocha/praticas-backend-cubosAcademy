const numeroCartao = '1111222233334444';

const ocultarNumeroCartao = numero => {
  let primeiroBloco = numeroCartao.slice(0, 4);
  let ultimoBloco = numeroCartao.slice(12);

  ultimoBloco = ultimoBloco.padStart(12, '*');

  let numeroCartaoOculto = primeiroBloco.concat(ultimoBloco);

  console.log(numeroCartaoOculto);
};

ocultarNumeroCartao(numeroCartao);
