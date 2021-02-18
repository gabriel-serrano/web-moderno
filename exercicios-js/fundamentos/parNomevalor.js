/**
 * Par nome/valor
 * 
 * O contexto léxico é o local onde a variável foi definida fisicamente no código 
 */

const saudacao = 'Olá'; // esse é um contexto léxico

function exec() {
  const saudacao = 'Oi'; // outro contexto léxico
  return saudacao
}

// Objeto é uma coleção dinâmica de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);