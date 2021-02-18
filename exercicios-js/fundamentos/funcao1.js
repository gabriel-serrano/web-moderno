// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(40, 2);
imprimirSoma(40);
imprimirSoma(40, 2, 3, 4, 5);
imprimirSoma();

// Função com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(40, 2));
console.log(soma(40));
console.log(soma(40, 2, 3, 4, 5));
console.log(soma());