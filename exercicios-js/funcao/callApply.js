function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // acessa o valor de preco e desc via global
console.log(produto.getPreco()); // acessa o valor de preco e desc local no objeto produto

const carro = { preco: 30000, desc: 0.1 }

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '£']));