function notas(valor) {
  let resposta = '';
  let quantidade = 0;

  while (valor !== 0) {
    if (valor > 100) {
      quantidade = Math.floor(valor / 100);
      valor = valor % 100;

      resposta += `${quantidade} nota(s) de R$ 100. `;
    } else if (valor < 100 && valor >= 50) {
      quantidade = Math.floor(valor / 50);
      valor = valor % 50;

      resposta += `${quantidade} nota(s) de R$ 50. `;
    } else if (valor < 50 && valor >= 10) {
      quantidade = Math.floor(valor / 10);
      valor = valor % 10;

      resposta += `${quantidade} nota(s) de R$ 10. `;
    } else if (valor < 10 && valor >= 5) {
      quantidade = Math.floor(valor / 5);
      valor = valor % 5;

      resposta += `${quantidade} nota(s) de R$ 5. `;
    } else if (valor < 5 && valor >= 1) {
      quantidade = Math.floor(valor / 1);
      valor = valor % 1;

      resposta += `${quantidade} nota(s) de R$ 1. `;
    }
  }

  return resposta;
}

console.log(notas(24));
console.log(notas(18));
console.log(notas(56));
console.log(notas(148));
console.log(notas(998));
console.log(notas(150));
console.log(notas(4));
console.log(notas(8));
console.log(notas(890));