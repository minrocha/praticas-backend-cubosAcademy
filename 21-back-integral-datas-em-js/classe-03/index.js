const date1 = new Date(2015, 1, 1, 12);
const date2 = new Date(2015, 1, 1, 17, 5);

// date1.get
const taAberto = date => {
  const horas = date.getHours();
  const minutos = date.getMinutes();

  if (horas >= 8 && horas <= 18) {
    if (horas == 18 && minutos >= 1) return false;
    return true;
  } else return false;
};
