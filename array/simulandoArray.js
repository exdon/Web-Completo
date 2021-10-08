const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray) // { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

Object.defineProperty(quaseArray, 'toString', { //vai representar todos os atributos do toString, que sera uma função.
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]) // Rafael

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) // [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]