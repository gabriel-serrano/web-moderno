function func1(vetor, numero) {
  let vetorMultiplicado = [];
  for (let i = 0; i < vetor.length; i++) {
    vetorMultiplicado.push(vetor[i] * numero);
  }
  return vetorMultiplicado;
}

function func2(vetor, numero) {
  let vetorMultiplicado = [];
  if (numero > 5) {
    for (let i = 0; i < vetor.length; i++) {
      vetorMultiplicado.push(vetor[i] * numero);
    }
    return vetorMultiplicado;
  } else {
    return 'Informe um numero maior que 5';
  }
}

const vetor = [1, 10, 4, 7, 13];

console.log(func1(vetor, 2));
console.log(func2(vetor, 2));
console.log(func2(vetor, 6));