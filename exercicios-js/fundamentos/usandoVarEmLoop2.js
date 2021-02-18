const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();

/**
 * Por var não possuir escopo de função ao executar a função funcs[2]() e funcs[8]()
 * é retornado o último valor válido de i, no caso, 10.
 */