const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]();
funcs[8]();

/**
 * O let respeita o escopo de bloco, assim sendo, quando a função é definida ela irá lembrar
 * do valor de i. Isso ocorre deivdo ao efeito de closure.
 */