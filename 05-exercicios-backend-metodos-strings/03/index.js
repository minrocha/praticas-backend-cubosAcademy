const texto = 'Aprenda programar do zero na Cubos Academy';

const criarUrlAmigavel = texto => {
  let urlAmigavel = texto.toLowerCase();
  let arrayUrlAmigavel = urlAmigavel.split(' ');

  urlAmigavel = arrayUrlAmigavel.join('-');
  console.log(urlAmigavel);
};

criarUrlAmigavel(texto);
