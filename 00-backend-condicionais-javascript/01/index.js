const jogada1 = 'tesoura';
const jogada2 = 'pedra';

//seu código aqui

switch (jogada1) {
  case 'pedra':
    if (jogada2 == 'tesoura') console.log(jogada1);
    else console.log(jogada2);
    break;
  case 'papel':
    if (jogada2 == 'tesoura') console.log(jogada2);
    else console.log(jogada1);
    break;
  case 'tesoura':
    if (jogada2 == 'pedra') console.log(jogada2);
    else console.log(jogada1);
    break;
  default:
    break;
}
