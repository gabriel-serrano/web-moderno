function jurosSimples(capital, juros, tempo) {
  return capital + (capital * juros * tempo);
}

function jurosComposto(capital, juros, tempo) {
  return capital * (1 + juros) ** tempo;
}

console.log(jurosSimples(1000, 0.01, 2));
console.log(jurosComposto(1000, 0.01, 2));