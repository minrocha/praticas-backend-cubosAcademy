const usuarios = [
  {
    nome: 'João',
    pets: ['Max'],
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

const encontrarPet = (usuarios, pet) => {
  let encontrado = false;
  let donoDoPet = '';
  usuarios.map(x => {
    x.pets.map(y => {
      if (y == pet) {
        encontrado = true;
        donoDoPet = x.nome;
      }
    });
  });
  encontrado
    ? console.log(`O dono(a) do(a) ${pet} é o(a) ${donoDoPet}`)
    : console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
};

encontrarPet(usuarios, 'Max');
encontrarPet(usuarios, 'Alberto');
encontrarPet(usuarios, 'Naninha');
