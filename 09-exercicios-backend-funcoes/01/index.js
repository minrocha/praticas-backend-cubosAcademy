const prova = {
  aluno: 'João',
  materia: 'Português',
  valor: 10,
  questoes: [
    {
      resposta: 'a',
      correta: 'b',
    },
    {
      resposta: 'c',
      correta: 'c',
    },
    {
      resposta: 'e',
      correta: 'b',
    },
    {
      resposta: 'b',
      correta: 'b',
    },
    {
      resposta: 'c',
      correta: 'c',
    },
  ],
};

const corrigiProva = prova => {
  let acertos = 0;
  let nota = 0;
  const { aluno } = prova;

  for (let questao of prova.questoes) {
    if (questao.resposta == questao.correta) acertos++;
  }

  nota = acertos * 2;

  console.log(
    `O aluno(a) ${aluno} acertou ${acertos} questões e obteve nota ${nota}`
  );
};

corrigiProva(prova);
