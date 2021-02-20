// let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";
let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1";
 
 
function avaliaPontuacoes (stringPontuacoes) {
  const pontuacoes = stringPontuacoes.split(', ');
  let quebrouRecorde = 0;
  let piorJogo = 0;
  let maiorPontuacao = pontuacoes[0];
  let piorPontuacao = pontuacoes[0];

  for (let i = 0; i < pontuacoes.length; i++) {
    let valorAtual = Number(pontuacoes[i]);

    // verifica quantas vezes quebrou seu record
    if (valorAtual > maiorPontuacao) {
      maiorPontuacao = valorAtual;
      quebrouRecorde++;      
    }

    // verifica qual é a pior pontuação e seu índice
    if (valorAtual < piorPontuacao) {
      piorPontuacao = valorAtual;
      piorJogo = i + 1;
    }      
  }

  return [quebrouRecorde, piorJogo];
}
 
console.log(avaliaPontuacoes(stringPontuacoes))