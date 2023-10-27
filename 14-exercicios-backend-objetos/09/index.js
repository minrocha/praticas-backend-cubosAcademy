const participantes = [
  { nome: 'João' },
  { nome: 'Ana' },
  { nome: 'Beatriz' },
  { nome: 'Maria' },
  { nome: 'Ana Clara' },
  { nome: 'Joana' },
  { nome: 'Augusto' },
  { nome: 'Renan' },
  { nome: 'Patricia' },
  { nome: 'Carlos' },
  { nome: 'Renato' },
  { nome: 'José' },
  { nome: 'Roberto' },
  { nome: 'Sara' },
  { nome: 'Junior' },
  { nome: 'Pedro' },
  { nome: 'Vitor' },
  { nome: 'Antonio' },
];

const amigo = 'Vitor';

for (let indice in participantes) {
  if (participantes[indice].nome == amigo)
    console.log(
      `Galera... ${amigo} está na posição ${Number(indice) + 1}, corre lá!`
    );
}
