//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 500;

let valorDoProdutoEmReais = valorDoProduto / 100;

let valorDaParcela = valorDoProdutoEmReais / quantidadeDoParcelamento;

let parcelasPagas = valorPago / valorDaParcela;

let parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;

let valorParaDistribuir = valorPago % valorDaParcela;

parcelasRestantes = Math.trunc(parcelasRestantes);
valorDaParcela = valorDaParcela + valorParaDistribuir / parcelasRestantes;

let valorPagoAtual =
  valorDoProdutoEmReais - valorPago - parcelasRestantes * valorDaParcela;

if (valorPagoAtual < 0) {
  valorPagoAtual *= -1;
  valorDaParcela -= valorPagoAtual / parcelasRestantes;
} else if (valorPagoAtual > 0) {
  valorDaParcela += valorPagoAtual / parcelasRestantes;
}

console.log(
  `Restam ${parcelasRestantes} parcelas de ${valorDaParcela.toFixed(2)}`
);

// console.log(
//   'Débito restante: ' +
//     (
//       valorDoProdutoEmReais -
//       valorPago -
//       parcelasRestantes * valorDaParcela
//     ).toFixed(0)
// );
