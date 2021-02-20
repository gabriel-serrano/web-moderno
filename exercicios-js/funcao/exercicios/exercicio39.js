function trocarVetor(vetorA, vetorB) {
  if (vetorA.length !== vetorB.length) {
    return 'Por favor, informe dois vetores de tamanho iguais';
  }
  
  const vetorLength = vetorA.length;

  // Colocar todos os valores de B em A
  for (let i = 0; i < vetorLength; i++) {
    let vetorItemA = vetorA.shift();
    let vetorItemB = vetorB.shift();
    vetorA.push(vetorItemB);
    vetorB.push(vetorItemA);
  }

  return {vetorA, vetorB};
}

const vetorA = [1, 2, 3, 4];
const vetorB = ['A', 'B', 'C', 'D'];

console.log(trocarVetor(vetorA, vetorB));