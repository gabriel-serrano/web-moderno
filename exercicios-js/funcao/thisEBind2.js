function Pessoa() {
  this.idade = 0;

  /**
   * O setInternal não tem acesso ao this, uma alternativa é passar o this por um bind
   * ou atribuir o valor de this a uma constante, que garantirá que sempre o setInterval acesse esse valor
   */

  const self = this;

  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }/*.bind(this)*/, 1000);
}

new Pessoa;