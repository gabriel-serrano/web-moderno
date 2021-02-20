const vetor = [1, 2, 10, 11, 13, 18, 54, 33, 20, 23];

function contarIntervalo(vetor) {
  let foraIntervalo = 0;
  let dentroIntervalo = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      dentroIntervalo++;
    } else {
      foraIntervalo++;
    }
  }

  return `No vetor ${vetor}, ${dentroIntervalo} números estão dentro do intervalo de [10, 20] e ${foraIntervalo} estão fora`;
}

console.log(contarIntervalo(vetor));