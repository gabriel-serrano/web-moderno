// Função em JS é First-Class Object (Citizens) ou High-order function
// A função é tratada como um dado, permitindo passar funções como parâmetros e retorno

// Function declaration (forma literal)
function fun1() {}

// Function expression
const fun2 = function () {}

// Armazenar função em um array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3));

// Armazenar função em um objeto
const obj = {};
obj.falar = function () { return 'Opa' };
console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
  fun();
}
run(function () { console.log('Executando...') });

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

soma(2, 3)(3);

const cincoMais = soma(2, 3);
cincoMais(4);
