let comparaComThis = function (param) {
  console.log(this === param); // this === global
}

comparaComThis(global); // em uma função normal, othis possui o escopo global

const obj = {};
comparaComThis = comparaComThis.bind(obj); // ao passar o obj como contexto para a função
comparaComThis(global); // ele irá retornar false
comparaComThis(obj); // porem passando o obj ele retorna true

// a função arrow comparaComThisArrow foi definida dentro um arquivo, que representa um módulo node
// o módulo node é o module.exports do arquivo, logo eu contexto léxico será esse módulo
let comparaComThisArrow = param => console.log(this === param); // this === {}
comparaComThisArrow(global); // retorna false, this !== global
comparaComThisArrow(module.exports); // retorn true, pois módulo node é o mesmo que module.exports

// a arrow function possui maior precedência do que o bind, desta forma o bind não altera o contexto dela
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);