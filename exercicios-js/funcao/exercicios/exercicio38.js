function imprimirImpar(inicio, fim) {
  if (inicio > fim) {
    inicio = fim + inicio
    fim = inicio - fim
    inicio = inicio - fim        
}

  for (let i = inicio; i <= fim; i++) {        
    if (i % 2 == 1) {
      console.log(i)
    }
  }
}

imprimirImpar(0, 100);
console.log(imprimirImpar(100, 0));
