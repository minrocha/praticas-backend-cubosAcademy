const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (lista, nome) => {
  lista.push(nome);
  console.log(lista.join(', '));
};

const atenderPaciente = lista => {
  lista.shift();
  console.log(lista.join(', '));
};

const cancelarAtendimento = (lista, nome) => {
  lista.splice(lista.indexOf(nome), 1);
  console.log(lista.join(', '));
};

agendarPaciente(pacientes, 'Maycon');

atenderPaciente(pacientes);

cancelarAtendimento(pacientes, 'Maycon');

cancelarAtendimento(pacientes, 'João');
