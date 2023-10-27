const nomes = [
  'Ford Ká',
  'Ranger',
  'Hilux',
  'Corola',
  'Fusca',
  'Chevete',
  'Brasilia',
];
const posicao = 3;

const grupoDeCarros = (nomesCarros, posicao) => {
  console.log(nomes.slice(posicao, posicao + 3).join(' - '));
};

grupoDeCarros(nomes, posicao);
