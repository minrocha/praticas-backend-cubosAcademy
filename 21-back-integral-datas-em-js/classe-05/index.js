const data1 = new Date(2021, 3, 25, 12);

const data2 = new Date(2021, 3, 26, 12);

const data3 = new Date(2021, 3, 26, 7, 59);

const data4 = new Date(2021, 3, 24, 9, 30);

const taAberto = data => {
  const diaDaSemana = data.getUTCDay();

  if (diaDaSemana == 0) {
    return false;
  }

  const horas = data.getHours();
  const minutos = data.getMinutes();

  if (diaDaSemana == 6) {
    if (horas >= 8 && horas <= 12)
      if (horas == 18 && minutos >= 1) return false;
  }

  if (horas >= 8 && horas <= 18) {
    if (horas == 18 && minutos >= 1) return false;
    return true;
  } else return false;
};

console.log(taAberto(data1));
console.log(taAberto(data2));
console.log(taAberto(data3));
console.log(taAberto(data4));
