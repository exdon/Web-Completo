function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco()) // 18 (20 - 10%) pega o global(this)
console.log(produto.getPreco()) // R$ 3900,65 (4589 - 15%) pega o definido no produto(objeto)

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)) // R$ 39992  (49990 - 20%) atraves do metodo call
console.log(getPreco.apply(carro)) // R$ 39992  (49990 - 20%) atraves do metodo apply

console.log(getPreco.call(carro, 0.17, '$')) //contexto (carro), parametros (0.17 e $)  $ 46790.64
console.log(getPreco.apply(carro, [0.17, '$'])) // aqui precisa definir os parametros dentro de um array [ ]  $ 46790.64
