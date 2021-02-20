const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // não tem acesso ao this do objeto pessoa, retorna undefined

const falarDePessoa = pessoa.falar.bind(pessoa); // passa o escopo do objeto pessoa permitindo o acesso a saudacao
falarDePessoa();
// nao necessariamente precisa do objeto pessoa em si, mas sim de um objeto com a propriedade saudacao
const falarOlá = pessoa.falar.bind({ saudacao: 'Olá' });
falarOlá();