const usuario = [
  {
    nome: 'João',
    idade: 25,
  },
  {
    nome: 'Ana',
    idade: 18,
  },
  {
    nome: 'Beatriz',
    idade: 15,
  },
  {
    nome: 'Carlos',
    idade: 16,
  },
  {
    nome: 'Antonio',
    idade: 32,
  },
];

for (let user of usuario) {
  user.idade >= 18 ? (user.maior_idade = true) : (user.maior_idade = false);
}

console.log(usuario);
