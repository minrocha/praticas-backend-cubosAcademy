function processData(input) {
  //Enter your code here
  const senhas = input.split('\n');
  const senhaCorreta = senhas[0];
  const senhaDigitada = senhas[1];
  let senhaAuxiliar = '';
  const arraySenhaCorreta = senhaCorreta.split('');
  const arraySenhaDigitada = senhaDigitada.split('');

  for (let letra of arraySenhaCorreta) {
    let indexLetraAtual;
    if (arraySenhaDigitada.includes(letra)) {
      senhaAuxiliar += letra;
      indexLetraAtual = arraySenhaDigitada.indexOf(letra);
      arraySenhaDigitada.splice(0, indexLetraAtual + 1);
    } else {
      console.log('NAO');
      return;
    }
  }
  senhaAuxiliar == senhaCorreta ? console.log('SIM') : console.log('NAO');
}

processData(senhaCorreta, senhaDigitada);
