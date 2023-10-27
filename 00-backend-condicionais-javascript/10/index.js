const caractere = 79;

if (
  caractere === 'A' ||
  caractere === 'E' ||
  caractere === 'I' ||
  caractere === 'O' ||
  caractere === 'U'
)
  console.log(`Vogal maiúscula`);
else if (
  caractere === 'a' ||
  caractere === 'e' ||
  caractere === 'i' ||
  caractere === 'o' ||
  caractere === 'u'
)
  console.log(`Vogal minúscula`);
else if (!isNaN(caractere)) console.log(`Número`);
else console.log(`Consoante`);
