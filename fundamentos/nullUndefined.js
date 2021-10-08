let valor // não inicializada
console.log(valor) //undefined
console.log(valor2) //valor 2 is not defined (não foi declarado)

valor = null //ausência de valor, não aponta pra nenhum endereço serve para zerar valor de uma variável.
console.lo(valor) //null
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) //undefined 
console.log(produto) // {}

produto.preco = 3.50
console.log(produto) // { preco: 3.5}

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) //false
// delete produto.preco  // deletar um atributo de um objeto
console.log(produto) //{preco: undefined}

produto.preco = null // sem preço (por exemplo, um produto grátis.)
console.log(!!produto.preco) // false
console.log(produto) //{produto: null}









