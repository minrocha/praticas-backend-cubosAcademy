const celular = 999918888;
const formatarCelular = numero => {
  
  if (String(numero).length < 8 || String(numero).length >= 12) console.log('Número de celular inválido');
  else {
    if (String(numero).indexOf(7) == 0) {
      if (String(numero).length == 10) console.log(`(${String(numero).slice(0, 2)}) 9 ${String(numero).slice(2, 6)}-${String(numero).slice(6)}`);
      else console.log(`(${String(numero).slice(0, 2)}) ${String(numero).slice(2, 3)} ${String(numero).slice(3, 7)}-${String(numero).slice(7)}`);
    } else String(numero).length == 8 ? console.log(`9 ${String(numero).slice(0, 4)}-${String(numero).slice(4)}`) : console.log(`${String(numero).slice(0, 1)} ${String(numero).slice(1, 5)}-${String(numero).slice(5)}`);
  }
};
formatarCelular(celular);
