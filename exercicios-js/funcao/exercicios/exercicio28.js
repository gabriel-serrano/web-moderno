const vetor = [1, 3, 42, 56, 99, 30, 9, 11, 24];

function qtdParImpr(vetor) {
  let par = 0;
  let impar = 0;

  for (let i = 0; i < vetor.length; i++) {    
    vetor[i] % 2 === 0 ? par++ : impar++;
  }
  
  return `No vetor ${vetor} existem ${par} números pares e ${impar} número ímpares`;
}

console.log(qtdParImpr(vetor));