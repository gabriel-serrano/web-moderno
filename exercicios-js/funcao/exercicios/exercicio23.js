function calcularMedia(codigoAluno, nota1, nota2, nota3) {
  let notas = [nota1,  nota2, nota3];
  notas.sort((a, b) => a < b ? 1 : -1);

  const media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;

  console.log(`
    Código do aluno: ${codigoAluno}
    Notas: ${nota1}, ${nota2}, ${nota3}
    Média final: ${media}
    Status: ${media >= 5 ? 'Aprovado' : 'Reprovado'}
  `);
}

calcularMedia(1042, 8, 10, 5);
calcularMedia(1022, 3, 4, 5);