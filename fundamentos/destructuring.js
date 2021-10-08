// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade : 5,
    endereço: {
        logradouro: 'Rua ABC',
        NUMERO: 1000
    }
}

const {nome, idade} = pessoa //quer dizer tire de dentro do objeto os atributos {nome, idade}, qual objeto? pessoa.
console.log(nome, idade) //Ana 5

const {nome: n, idade:i} = pessoa // : cria uma variavel (n,i) 
console.log(n,i) // Ana 5

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // sobrenome  undefined , bemHumorada  true

const { endereço: {logradouro, NUMERO, cep} } = pessoa
console.log(logradouro, NUMERO, cep) // Rua ABC , 1000 , undefined