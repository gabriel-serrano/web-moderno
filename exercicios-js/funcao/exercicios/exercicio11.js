function calcularAnoBissexto(ano) {  
  if (ano % 400 === 0 || ano % 100 !== 0 && ano % 4 === 0) {
    console.log(`${ano} é bissexto`);
  } else {
    console.log(`${ano} NÃO é bissexto`);
  }
}

calcularAnoBissexto(1600);
calcularAnoBissexto(1700);
calcularAnoBissexto(1000);
calcularAnoBissexto(2000);
calcularAnoBissexto(2008);