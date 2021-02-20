function tiposTrinagulo(a, b, c) {
  if (a === b && a === c) {
    console.log('Equilátero');
  } else if (a !== b && a !== c && b !== c) {
    console.log('Escaleno');
  } else {
    console.log('Isósceles');
  }
}

tiposTrinagulo(10, 10, 10);
tiposTrinagulo(10, 10, 2);
tiposTrinagulo(2, 10, 2);
tiposTrinagulo(1, 2, 2);
tiposTrinagulo(1, 2, 10);