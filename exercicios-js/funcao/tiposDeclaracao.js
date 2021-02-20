console.log(soma(3, 4)); // na function declaration é possível chamar a função antes de declarar
// console.log(sub(3, 4)); // isso não ocorre com function expression e named function expression

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) { // funções anônimas não aparecem no stack trace na hora de debugar
  return x - y;
}

// named function expression
const mult = function mult(x, y) { 
  return x * y;
}