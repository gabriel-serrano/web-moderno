let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// Negação de um valor
console.log(!true); // false
console.log(!false); // true

// Para converter qualquer tipo para booleano usar dupla negação !!
console.log(!!'string'); // true

console.log('### Valores truthy ###');
console.log(!!1);
console.log(!!-3);
console.log(!!' ');
console.log(!!'string');
console.log(!!true);
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);

// Somente os seguintes valores serão falsos, o restante são todos true
console.log('### Valores falsy ###');
console.log(!!0);
console.log(!!'');
console.log(!!false);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);