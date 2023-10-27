const dataInicio = new Date();
const dataSolicitacao = new Date(2023, 7, 22, 9, 48);

const promocaoValida = (dataInicio, dataSolicitacao) => {
  const dataInicioTimestamps = +dataInicio;
  const dataSolicitacaoTimestamps = +dataSolicitacao;

  if (dataSolicitacaoTimestamps < dataInicioTimestamps + 1000 * 60 * 60 * 24)
    return `true`;
  else return `false`;
};

console.log(promocaoValida(dataInicio, dataSolicitacao));
