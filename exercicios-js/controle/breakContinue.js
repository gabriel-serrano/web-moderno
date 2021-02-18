const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Break e continue não agem em um bloco if, mas sim em blocos while, for, switch

for (let x in nums) {
  if (x == 5) {
    break; // Sai do laço
  }
  console.log(`${x} = ${nums[x]}`);
}

console.log('-------');

for (let y in nums) {
  if (y == 5) {
    continue; // Pula a repetição e vai para a próxima
  }
  console.log(`${y} = ${nums[y]}`);
}

// rótulo
// cria um rótulo para indicar qual laço for é para "quebrar" e sair
// não utilizar esse forma
externo:
for (let a in nums) {
  for (let b in nums) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}