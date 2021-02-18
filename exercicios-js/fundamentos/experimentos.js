let a = 3; // local

global.b = 123;
this.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(a);
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variavel global
abc = 3; // evite
console.log(global.abc);

// module.exports = { e: 456, f: false, g: 'teste' }