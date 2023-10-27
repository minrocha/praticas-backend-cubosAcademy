const email1 = 'jose@cubos.academy';
const email2 = 'jose@cubos.academy.br';
const email3 = 'jose.messias@cubos.academy';
const email4 = 'jose.messias@cubos.io';
const email5 = 'jose@cubos';
const email6 = 'jose.messias@cubos';
const email7 = 'jose.messias@.';
const email8 = 'jose.@cubos';
const email9 = '.@';
const email10 = '@.';
const email11 = 'jose.messias@cubos.';
const email12 = '.messias@cubos.';
const email13 = '.messias@cubos';

const verificarEmail = email => {
  let emailAnalisado = email.trim();

  if (email.indexOf('.') == 0 || email.lastIndexOf('.') == emailAnalisado.length - 1 || !emailAnalisado.includes('@') || !emailAnalisado.includes('.')
  ) {
    console.log('E-mail inválido');
    return;
  }
  console.log('E-mail válido');
};

verificarEmail(email1);
verificarEmail(email2);
verificarEmail(email3);
verificarEmail(email4);
verificarEmail(email5);
verificarEmail(email6);
verificarEmail(email7);
verificarEmail(email8);
verificarEmail(email9);
verificarEmail(email10);
verificarEmail(email11);
verificarEmail(email12);
verificarEmail(email13);
