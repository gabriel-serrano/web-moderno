function fatorial(numero) {
  let resultado = 1;

  for (let i = numero; i >= 1; i--) {
    resultado *= i;
  }

  return resultado;
}

console.log(fatorial(5));

function fatorialMelhorado(numero) {
  if (numero == 0) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

console.log(fatorialMelhorado(5))