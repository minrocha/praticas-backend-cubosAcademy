const nomes = ['Ana', 'Joana', 'Carlos', 'amanda'];
let nomesIniciamComA;

const comecaComA = nome => nome[0] == 'A' || nome[0] == 'a';

console.log((nomesIniciamComA = nomes.filter(comecaComA)));
