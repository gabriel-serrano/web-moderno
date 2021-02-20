function classificarNotas(notas) {
  let conceitos = [];

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 0 && notas[i] <= 4.9) {
      conceitos.push('D');
    } else if (notas[i] >= 5 && notas[i] < 7) {
      conceitos.push('C');
    } else if (notas[i] >= 7 && notas[i] < 9) {
      conceitos.push('B');
    } else if (notas[i] >= 9 && notas[i] < 10) {
      conceitos.push('A');
    } else {
      conceitos.push('Nota inválida');
    }
  }

  return conceitos;
}

console.log(classificarNotas([4.2, 9.6, 3.8, 5.7, 7.3, 2.3]));