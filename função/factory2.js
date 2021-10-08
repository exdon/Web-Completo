function criarProduto(nome,preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

const novoProduto = criarProduto('Sabao', 5.99)
console.log(novoProduto)
console.log(criarProduto('Notebook', 2199.49))