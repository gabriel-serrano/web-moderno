const vetor = [4, -5, 1, 0, -3, -10, 11, -1, -42];

function numerosNegativos(vetor) {
  let numerosNegativos =  0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] / -1 > 0) numerosNegativos++;
  }

  return numerosNegativos;
}

console.log(numerosNegativos(vetor));