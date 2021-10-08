// pessoa-> 123 -> {...}

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa) //{ nome: 'Pedro' }

// pessoa -> 456 -> {...}  fazer com que pessoa deixe de apontar para 123 e passe a apontar para 456
//pessoa = {nome: 'Ana'} // gera um erro. Pq não pode atribuir pra uma const um novo objeto em outro endereço.

Object.freeze(pessoa) // congela o obj

pessoa.nome = "Maria" // ele não altera
pessoa.end = 'Rua ABC' // ele não adiciona
delete pessoa.nome // ele não deleta
console.log(pessoa.nome) // Continua sendo Pedro, pq o obj foi congelado.
console.log(pessoa.end) // undefined

const pessoaConstante = Object.freeze({ nome: 'João'}) // já cria um obj congelado. ou seja não será possivel fazer nenhuma alteração nele
console.log(pessoaConstante) //{ nome: 'João' }

