const dataInicio = new Date();
const dataSolicitacao = new Date(2023, 8, 21);

const promocaoValida = (dataInicio, dataSolicitacao) => {
  const dataInicioTimestamps = +dataInicio;
  const dataSolicitacaoTimestamps = +dataSolicitacao;

  if (
    dataSolicitacaoTimestamps <
    dataInicioTimestamps + 1000 * 60 * 60 * 24 * 30
  )
    return `true`;
  else return `false`;
};

console.log(promocaoValida(dataInicio, dataSolicitacao));
