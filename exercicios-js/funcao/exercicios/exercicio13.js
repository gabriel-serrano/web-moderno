function classificaDia(data) {
  const regExp = /\d{2}\/\d{2}\/\d{4}$/;

  if (!regExp.test(data)) return 'Data inválida';

  const [day, month, year] = data.split('/');

  const formatedDate = new Date(year, month, day);

  const actualDay = formatedDate.getDay();

  switch (actualDay) {
    case 0: 
    case 6:
      return 'Final de semana';
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'Dia de semana';
    default:
      return 'Data inválida';
  }
}

console.log(classificaDia('20/02/2021'));
console.log(classificaDia('18/02/2021'));
console.log(classificaDia('08/07/2021'));
console.log(classificaDia('12/07/1921'));