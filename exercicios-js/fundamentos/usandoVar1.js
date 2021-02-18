// A variável var, dentro de um bloco de código que não seja uma função, estará disponível globalmente
// Var possui dois escopo, global ou local em um escopo de função

{
  {
    {
      var sera = 'Sera?';
    }
  }
}

console.log(sera);

function teste() {
  // Escopo local 
  var local = 123;
}

teste();
// console.log(local); Não é possível acessar uma variável definida dentro de uma função