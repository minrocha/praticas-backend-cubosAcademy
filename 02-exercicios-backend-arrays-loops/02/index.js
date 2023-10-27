const letras = ['A', 'a', 'B', 'C', 'E', 'e'];

let algumasLetras = ['E', 'u', 'e', 'B', 'U', 'E']; // outro array de letras

let letrasE = 0; // armazena total de letras 'E' ou 'e'

for (let letra of algumasLetras) // itera array 'algumasLetras', verificando se existem letras 'E' ou 'e' a cada iteração. A cada letra 'E' ou 'e' encontrada, 'letrasE' é incrementada
  if (letra == 'E' || letra == 'e') letrasE++; // verifica se o valor atual da iteracao é igual a 'E' ou 'e'. Se sim, 'letrasE++'

if (letrasE) {
  // letrasE é diferente de 0?
  letrasE == 1
    ? // letrasE é igual a 1? Se sim, loga a frase no singular
      console.log(`Foi encontrada ${letrasE} letra "E"  ou "e".`)
    : console.log(`Foram encontradas ${letrasE} letras "E" ou "e".`); // Se é maior que 1, loga a frase no plural
} else console.log(`Nenhuma letra "E" ou "e" foi encontrada.`); // mensagem caso letrasE seja igual a 0
