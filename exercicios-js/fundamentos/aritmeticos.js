const [a, b, c, d] = [3, 5, 1, 15];

/**
 * Operadores:
 * - prefix: ++a
 * - posfix: a++
 * - ifix: a + b
 * 
 * - unarios: ++a, -a, typeof
 * - binarios: a + b
 * - ternarios: a > b ? 1 : 0
 */

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo);