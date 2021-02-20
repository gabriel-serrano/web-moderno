const vetor = [10, 5, 3];

function mediaAritmetica(vetor) {
  let total = 0;

  vetor.forEach(valor => total += valor);

  let media = total / vetor.length;

  return media;
}

console.log(mediaAritmetica(vetor));