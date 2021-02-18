/**
 * Hoisting, ou içamento, é um ação que o interpretador do JavaScript faz quando ele "iça" para cima todas
 * as declarações de variáveis, permitindo assim, que uma variável seja chamada antes de ser declarada.
 * Vale lembrar que ele não gera erro e traz o valor como undefined, mas não traz o seu valor declarado.
 * Com let e const isso não ocorre.
 */

console.log(a);
var a = 10;
console.log(a);

func();

function func() {
  console.log('Olá');
}