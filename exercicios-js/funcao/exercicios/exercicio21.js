// criança com menos de 10 anos pagam  80
// 10 e 30 anos pagam 50
// 30 e 60 anos pagam 95
// > 60 anos pagam 130

function valorConvenio(idade) {
  let valorPago = 100;
  
  if (idade >= 0 && idade < 10) {
    valorPago += 80;
  } else if (idade < 30) {
    valorPago += 50;
  } else if (idade < 60) {
    valorPago += 95;
  } else {
    valorPago += 130;
  }

  return `R$ ${valorPago}`;
}

console.log(valorConvenio(5));
console.log(valorConvenio(20));
console.log(valorConvenio(40));
console.log(valorConvenio(70));