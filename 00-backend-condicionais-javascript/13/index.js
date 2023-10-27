//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'cheque';

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let valorFinal;
let descontoCredito = 0.05;
let descontoCheque = 0.03;
let descontoDebitoOuDinheiro = 0.1;

if (tipoDePagamento === 'credito') {
  valorFinal = valorDoProduto - valorDoProduto * descontoCredito;
} else if (tipoDePagamento === 'cheque') {
  valorFinal = valorDoProduto - valorDoProduto * descontoCheque;
} else if (tipoDePagamento === 'debito' || tipoDePagamento === 'dinheiro') {
  valorFinal = valorDoProduto - valorDoProduto * descontoDebitoOuDinheiro;
}

console.log(`Valor a ser pago: R$${(valorFinal / 100).toFixed(2)}`);
