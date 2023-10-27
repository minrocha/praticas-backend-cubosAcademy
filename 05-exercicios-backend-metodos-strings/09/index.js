const nome1 = 'Guido Cerqueira';
const nome2 = 'Maycon Rocha';
const nome3 = 'Daylla Carolline';

const criarNickName = nome => {
  let nickName = '@';

  for (let caractere of nome.toLowerCase().replaceAll(' ', '')) {
    if (nickName.length < 13) nickName += caractere;
  }

  console.log(nickName);
};

criarNickName(nome1);
criarNickName(nome2);
criarNickName(nome3);
