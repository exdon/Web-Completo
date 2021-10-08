const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos) 
const todosMaisUm = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos) // [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] [ 'Valeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]
console.log(todosMaisUm) // [ 'Valeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ]

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]