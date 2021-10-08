const tecnologias = new Map() // instancia o map
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react')) // { framework: false }
console.log(tecnologias.get('react').framework) // false

const chavesVariadas = new Map([
    [function () { }, 'Função'],  // chave = function() {}, valor = 'função'
    [{}, 'Objeto'],               // chave = {}, valor = 'Objeto'
    [123, 'Número'],             // chave = 123, valor = 'Número'
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

/* [Function] Função
{} Objeto
123 Número */


// .has é uma função que diz se o elemento passado() está ou não dentro do map
console.log(chavesVariadas.has(123)) // true
// delete exclui elementos dentro do map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
// .size diz quantos elementos existem dentro do map
console.log(chavesVariadas.size) // 2  [function () { }, 'Função'] e [{}, 'Objeto'].

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas) // Map { [Function] => 'Função', {} => 'Objeto', 123 => 'b', 456 => 'b' } // a chave não aceita repetições.