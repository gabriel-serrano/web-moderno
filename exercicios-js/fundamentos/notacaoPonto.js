console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola 2';
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
  this.exec = function() {
    console.log('Exec');
  }
}

const obj2 = new Obj('Cadeira');
console.log(obj2.nome);
obj2.exec();
