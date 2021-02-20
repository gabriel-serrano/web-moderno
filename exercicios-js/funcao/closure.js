// Closure é o escopo criado quando a função é declarada
// Esse escopo permite acessar e manipular variáveis externas à função

const x = 'Global';

function fora() {
  const x = 'Local';

  function dentro() { // A função "lembra" do local onde foi criada
    return x;
  }

  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());