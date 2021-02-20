const vetor = [12, 4, 55, 68, 3, 17, 19, 42, 99];

function maiorMenorValor(vetor) {
  const maiorValor = Math.max(...vetor);
  const menorValor = Math.min(...vetor);
  
  return `No vetor ${vetor} o maior valor é ${maiorValor} e o menor valor é ${menorValor}`;
}

console.log(maiorMenorValor(vetor));

function outraForma(vetor) {
  let maior ;
  let menor;
  
  for (let i = 0; i < vetor.length; i++){
    if (maior === undefined && menor === undefined){
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior){
        maior = vetor[i]
      }
      if(vetor[i] < menor){
        menor = vetor[i]
      }
    }
  }
  
  return [maior, menor];
}

console.log(outraForma(vetor));