//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 18;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

idadeDoAluno >= 18
  ? console.log(`Matrícula realizada com sucesso`)
  : possuiResponsavel
  ? console.log(`Matrícula realizada com sucesso`)
  : console.log(`Não é possível fazer a rematrícula`);
