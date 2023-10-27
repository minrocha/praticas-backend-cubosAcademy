//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 350000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 40;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1200000;

if (mesesDecorridos > 60) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o tempo decorrido desde a assinatura do contrato já ultrapassou 60 meses.`
  );
} else if (totalJaPagoPeloAluno >= 1800000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o total pago até o momento já atingiu R$18.000,00, valor suficiente para quitar a dívida.`
  );
} else if (rendaMensalEmCentavos < 200000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`
  );
} else {
  let valorDaParcela = rendaMensalEmCentavos * 0.18;
  valorDaParcela /= 100;
  console.log(`O valor da parcela desse mês é R$ ${valorDaParcela} reais`);
}
