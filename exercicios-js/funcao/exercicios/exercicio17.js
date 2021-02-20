function aumentoSalario(plano, salarioAtual) {
  switch (plano.toUpperCase()) {
    case 'A':
      return salarioAtual * 1.10;
    case 'B':
      return salarioAtual * 1.15;
    case 'C':
      return salarioAtual * 1.20;
    default:
      return 'Plano inválido';
  }
}

console.log(aumentoSalario('a', 1000));
console.log(aumentoSalario('B', 1000));
console.log(aumentoSalario('c', 1000));
console.log(aumentoSalario('D', 1000));