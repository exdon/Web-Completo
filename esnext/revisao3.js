// ES8: Object.values/Object.entries
// Object.values = retorna valores do obj
// Object.entries = retorna um matriz(um array, com varios arrays) com conjunto de chave e valor.
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ] // retorna as chaves do obj
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, // antes nome: nome
    ola() { // antes ola: function()
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola()) // Carla Oi gente!

// Class
// classe internamente é convertida para uma função
// para criar obj a partir de uma class, se uma a palavra reservada 'new'
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar()) // Au au!
