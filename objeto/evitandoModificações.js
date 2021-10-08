// Object.preventExtensions
// ele não permite que adicione novos atributos no obj. 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco : 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto)) // false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não adiciona, por conta do preventExtensions
delete produto.tag // ele deleta normalmente.
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal
// sela o objeto, não consigo adiconar, excluir. porém consigo modificar os atributos.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva' // ele não adiciona
delete pessoa.nome // ele não excluí
pessoa.idade = 29 // ele muda idade para 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes
// não da par alterar, excluir nem modificar

