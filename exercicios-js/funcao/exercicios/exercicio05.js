function formataValor(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

console.log(formataValor(0.30000000000004));