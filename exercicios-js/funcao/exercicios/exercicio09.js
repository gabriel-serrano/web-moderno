// Todo aluno recebe uma nota de 0 a 100
// Alunos com nota abaixo de 40 são reprovados.
// Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, 
// arredondar a nota para esse próximo múltiplo de 5.
// Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno.

function arredondarNota(nota) {
  let criterioArredonda = nota % 5; // Valor igual a 3 ou 4, arredonda

  if (criterioArredonda > 2) {
    return nota + (5 - criterioArredonda);
  } else {
    return nota;
  }
}

function avaliaNota(nota) {  
  let notaCorrigida = arredondarNota(nota);

  if (notaCorrigida >= 40 && nota <= 100) {
    console.log(`Aprovado - ${notaCorrigida}`);
  } else if (notaCorrigida >= 0 && notaCorrigida < 40) {
    console.log(`Reprovado - ${notaCorrigida}`);
  } else {
    console.log('Nota inválida');
  }
}

avaliaNota(-1);
avaliaNota(29);
avaliaNota(38);
avaliaNota(84);
avaliaNota(100);
avaliaNota(30);
avaliaNota(38);
avaliaNota(88);
avaliaNota(61);