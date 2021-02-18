function tratarErroELancar(erro) {
  // throw new Error('...');
  throw {
    name: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    // Finally sempre é executado ao final
    console.log('Final');
  }
}


const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);