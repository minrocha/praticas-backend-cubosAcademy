const diaDaSemana = 8;

const diasDaSemanaString = [
  null,
  'Segunda Feira',
  'Terça Feira',
  'Quarta Feira',
  'Quinta Feira',
  'Sexta Feira',
  'Sabado',
  'Domingo',
];

if (diaDaSemana < 1 || diaDaSemana > 7) {
  console.log(`O dia da semana informado não é válido.`);
} else {
  console.log(diasDaSemanaString[diaDaSemana]);
}
