const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const filaAtendimento = (lista = [], operacao, nome = '') => {
  if (operacao == 'agendar') {
    lista.push(nome);
  } else if (operacao == 'atender') {
    lista.shift();
  }
  console.log(lista.join(', '));
};

filaAtendimento(pacientes, 'agendar', 'Carlos');
filaAtendimento(pacientes, 'atender', 'Carlos');
