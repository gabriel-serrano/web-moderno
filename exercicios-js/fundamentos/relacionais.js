console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
// Compara duas referências de memória por isso são falsos
console.log('10)', d1 === d2);
console.log('11)', d1 == d2);
// Como compara a data em si os dois valores são verdadeiros
console.log('12)', d1.getTime() === d2.getTime());
console.log('13)', d1.getTime() == d2.getTime());

console.log('14)', undefined == null);
console.log('15)', undefined === null);
