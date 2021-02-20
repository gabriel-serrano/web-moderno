function pedido(codigo, quantidade) {
  switch (codigo) {
    case 100:
      console.log(`Cachorro Quento - R$ ${quantidade * 3.00}`);
      break;
    case 200:
      console.log(`Hambúrguer Simples - R$ ${quantidade * 4.00}`);
      break;
    case 300:
      console.log(`Cheeseburguer - R$ ${quantidade * 5.50}`);
      break;
    case 400:
      console.log(`Bauru - R$ ${quantidade * 7.50}`);
      break;
    case 500:
      console.log(`Refrigerante - R$ ${quantidade * 3.50}`);
      break;
    case 600:
      console.log(`Suco - R$ ${quantidade * 2.80}`);
      break;
  }
}

pedido(100, 2);
pedido(500, 2);