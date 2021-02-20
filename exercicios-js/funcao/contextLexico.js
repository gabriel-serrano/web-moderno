const valor = 'Global';

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = 'Local';
  minhaFuncao();
}

exec(); // retorna global
// o contexto léxico de uma função é definida no momento de sua criação (linha 3)
// a função sempre irá lembrar do contexto de onde foi criada, independente do onde foi chamada
