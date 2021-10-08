const sequence = {
    _id: 1,
    get id() {return this._id++} // retorna sempre o proximo valor de id.
} // um objeto

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //! se o id do produto não estiver setado.. produto.id = sequence.id
    produtos[produto.id] = produto // a const produtos recebe como chave produto.id e como valor o produto. Se ele já estiver setado ele substituí, caso não ele adiciona
    return produto
}

function getProduto(id) {
    return produtos[id] || {} // caso produtos[id] esteja null ou undefined, ele retorna um objeto vazio {}, caso não ele retorna produtos[id]
}

function getProdutos() {
    return Object.values(produtos) // retorna apenas os valores dentro de obj produtos.
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto} // tornar as funções visiveis pra fora do arquivo, não somente dentro do module.
