function bhaskara(a, b, c) {
  const resultado = [];

  const delta = (b ** 2) - (4 * a * c);

  if (delta < 0) return "Delta é negativo";
  
  const x1 = (-b + Math.sqrt(delta)) / 2 * a;
  const x2 = (-b - Math.sqrt(delta)) / 2 * a;

  resultado.push(x1, x2);

  return resultado;
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, 12, -13))