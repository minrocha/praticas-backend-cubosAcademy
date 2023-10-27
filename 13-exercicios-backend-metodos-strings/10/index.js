const nomeArquivo1 = 'Foto da Familia.pdf';
const nomeArquivo2 = 'Foto da Familia.gif';

const validararquivo = nomeArquivo => {
  nomeArquivo.slice(nomeArquivo.lastIndexOf('.') + 1) == 'jpg' ||
  nomeArquivo.slice(nomeArquivo.lastIndexOf('.') + 1) == 'jpeg' ||
  nomeArquivo.slice(nomeArquivo.lastIndexOf('.') + 1) == 'gif' ||
  nomeArquivo.slice(nomeArquivo.lastIndexOf('.') + 1) == 'png'
    ? console.log('Arquivo válido')
    : console.log('Arquivo inválido');
};

validararquivo(nomeArquivo1);
validararquivo(nomeArquivo2);
