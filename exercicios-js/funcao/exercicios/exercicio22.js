function pagarAnuidade(mes, valor) {
  if (mes > 0 && mes < 13) {
    return valor * (1 + 0.05) ** (mes - 1);
  } else {
    return 'Mês inválido'
  }
}

console.log(pagarAnuidade(1, 100));
console.log(pagarAnuidade(2, 100));
console.log(pagarAnuidade(3, 100));
console.log(pagarAnuidade(13, 100));