function calculadora(a, operador, b) {
  switch (operador) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      console.log(a / b);
      break;
    default:
      console.log('Operador inválido');
  }
}

calculadora(10, '+', 5);
calculadora(10, '-', 5);
calculadora(10, '*', 5);
calculadora(10, '/', 5);