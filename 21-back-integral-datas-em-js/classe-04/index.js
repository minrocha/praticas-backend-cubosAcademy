const date1 = new Date(2021, 3, 25, 12);

const date2 = new Date(2021, 3, 26, 12);

const date3 = new Date(2021, 3, 26, 7, 59);

const taAberto = data => {
  const diaDaSemana = data.getUTCDay();

  if (diaDaSemana == 0 || diaDaSemana == 6) return false;

  const horas = data.getHours();
  const minutos = data.getMinutes();

  if (horas >= 8 && horas <= 18) {
    if (horas == 18 && minutos >= 1) return false;
    return true;
  } else return false;
};
