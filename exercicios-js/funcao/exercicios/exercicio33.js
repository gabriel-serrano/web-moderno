const vetorInteiro = [1, 2, 3, 4];
const vetorString = ['cinco', 'seis', 'sete', 'oito'];
const vetorDouble = [1.2, 3.4, 5.6, 7.8 ];

function uniaoVetor(...args) {
  let resultado = []
  for (let i = 0; i <arguments.length; i++) {
    resultado = resultado.concat(arguments[i]);
  }
  return resultado;
}

console.log(uniaoVetor(vetorInteiro, vetorString, vetorDouble));