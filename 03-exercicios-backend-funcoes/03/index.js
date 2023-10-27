const novaBermuda = {
  id: 2,
  nome: 'Bermuda',
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis = {
  id: 3,
  nome: 'Tenis',
  qtd: 1,
  precoUnit: 10000,
};

const carrinho = {
  nomeDoCliente: 'Guido Bernal',
  produtos: [
    {
      id: 1,
      nome: 'Camisa',
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: 'Bermuda',
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo: function () {
    let totalDeItensDoCarrinho = carrinho.totalDeItens();
    let precoTotalDoCarrinho = carrinho.precoTotal();

    console.log(
      `Cliente: ${
        this.nomeDoCliente
      } \nTotal de itens: ${totalDeItensDoCarrinho} itens \nTotal a pagar: R$${precoTotalDoCarrinho.toFixed(
        2
      )} \n`
    );
  },
  addProduto: function (produto) {
    let produtoJaExisteNoCarrinho = false;

    for (let item in this.produtos) {
      if (this.produtos[item].id == produto.id) {
        this.produtos[item].qtd += produto.qtd;
        produtoJaExisteNoCarrinho = true;
      }
    }

    if (!produtoJaExisteNoCarrinho) {
      carrinho.produtos.push(produto);
    }
  },
  imprimirDetalhes: function () {
    console.log(`Cliente: ${this.nomeDoCliente} \n`);

    for (let item of this.produtos) {
      console.log(
        `Item ${item.id} - ${item.nome} - ${item.qtd} - R$ ${
          item.qtd * (item.precoUnit / 100).toFixed(2)
        }`
      );
    }
    console.log(
      `\nTotal de itens: ${carrinho.totalDeItens()} itens \nTotal a pagar: R$${carrinho
        .precoTotal()
        .toFixed(2)}`
    );
  },
  calcularDesconto: function () {
    let jaAplicouUmDesconto = false;
    let primeiraOpcaoDesconto = 0;
    let segundaOpcaoDesconto = 0;
    let maiorDesconto = 0;

    if (!jaAplicouUmDesconto) {
      if (this.totalDeItens() > 4) {
        for (let item of this.produtos) {
          if (primeiraOpcaoDesconto == 0)
            primeiraOpcaoDesconto = item.precoUnit;
          else {
            if (item.precoUnit <= primeiraOpcaoDesconto) {
              primeiraOpcaoDesconto = item.precoUnit;
            }
          }
        }
        primeiraOpcaoDesconto /= 100;
      }

      if (this.precoTotal() > 100) {
        segundaOpcaoDesconto = this.precoTotal() * 0.1;
      }

      maiorDesconto = Math.max(primeiraOpcaoDesconto, segundaOpcaoDesconto);

      jaAplicouUmDesconto = true;
      return maiorDesconto.toFixed(2);
    }
  },
  totalDeItens: function () {
    let totalDeItens = 0;
    for (let produto of this.produtos) {
      totalDeItens += produto.qtd;
    }
    return totalDeItens;
  },
  precoTotal: function () {
    let precoTotal = 0;
    for (let produto of this.produtos) {
      precoTotal += (produto.qtd * produto.precoUnit) / 100;
    }
    return precoTotal;
  },
};

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();

console.log(carrinho.calcularDesconto());

carrinho.addProduto(novaBermuda);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());

carrinho.addProduto(novoTenis);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());

carrinho.addProduto(novaBermuda);

carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());
