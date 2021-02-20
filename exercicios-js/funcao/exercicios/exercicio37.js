// n = número de termo, a1 = primeiro termo, r = razao
function progressaoAritmetica(n, a1, r) {
  // a + a+r + a+2r
  let resultado = 0;
  for (let i = 0; i < n; i++) {
    resultado += a1 + i * r;    
  }
  return resultado;
}

function progressaoGeometrica(n, a1, r) {
  let resultado = 0;
  for (let i = 0; i < n; i++) {
    resultado += a1 * i ** r;    
  }
  return resultado;
}

console.log(progressaoAritmetica(3, 1, 3));
console.log(progressaoGeometrica(3, 1, 3));