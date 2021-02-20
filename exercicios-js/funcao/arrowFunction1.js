let dobro = function (a) {
  return a * 2;
}

dobro = (a) => {
  return a * 2;
};

// retorno implícito
dobro = a => a * 2;
console.log(dobro(Math.PI));

let ola = function () {
  return 'Olá';
};

ola = () => 'Olá';
ola = _ => 'Olá'; // _ é um parâmetro válido
console.log(ola());
