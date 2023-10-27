const filaDeDentro = ['Jose', 'Joao'];
const filaDeFora = ['Joana', 'Roberta', 'Klaus', 'Violet'];

while (filaDeDentro.length < 5 && filaDeFora.length > 0)
  filaDeDentro.push(filaDeFora.shift());

console.log(filaDeDentro, '\n', filaDeFora);
