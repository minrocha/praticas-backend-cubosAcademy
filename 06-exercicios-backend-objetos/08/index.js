const usuarios = [
  {
    nome: 'João',
    pets: [],
  },
  {
    nome: 'Ana',
    pets: ['Pingo', 'Lulu'],
  },
  {
    nome: 'Beatriz',
    pets: ['Lessie'],
  },
  {
    nome: 'Carlos',
    pets: ['Farofa', 'Salsicha', 'Batata'],
  },
  {
    nome: 'Antonio',
    pets: ['Naninha'],
  },
];

for (pessoa of usuarios) {
  const { nome } = pessoa;
  const quantidadeDePets = pessoa.pets.length;

  switch (quantidadeDePets) {
    case 0:
      console.log(`Sou ${nome} e não tenho pets.`);
      break;
    case 1:
      console.log(`Sou ${nome} e tenho ${quantidadeDePets} pet.`);
      break;
    default:
      console.log(`Sou ${nome} e tenho ${quantidadeDePets} pets.`);
      break;
  }
}
