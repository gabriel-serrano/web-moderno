let valor; // valor declarado, mas não inicializado
console.log(valor); // undefined
// console.log(valor2); // ReferenceError: is not defined, não foi declarado

valor = null // foi inicializada, mas não aponta para nenhum endereço de memória
console.log(valor);

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);

produto.preco = null; // sem preco
console.log(!!produto.preco);
console.log(produto);
