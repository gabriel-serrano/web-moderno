// o this numa função é fixo, ele é referenciado no momento de sua criação e independe de onde foi chamado
function Pessoa() {
  this.idade = 0;

  // o contexto léxico da arrow funcition no setInterval é o da function Pessoa
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa;