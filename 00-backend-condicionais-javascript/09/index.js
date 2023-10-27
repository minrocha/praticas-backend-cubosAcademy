const nota = 2.87;

let notaConceito;

if (nota < 4) notaConceito = 'E';
else if (nota >= 4 && nota <= 5.9) notaConceito = 'D';
else if (nota >= 6 && nota <= 7.9) notaConceito = 'C';
else if (nota >= 8 && nota <= 8.9) notaConceito = 'B';
else if (nota >= 9) notaConceito = 'A';

console.log(`O estudante obteve conceito ${notaConceito}`);
