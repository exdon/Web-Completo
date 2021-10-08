const nums = [1, 2, 3, 4, 5]

// for com propósito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado) // [ 2, 4, 6, 8, 10 ]
// ele retorna um novo array com a mesma quantidade de elementos do array, faz um for em cada elemento e adiciona um evento definido dentro dele ().


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // eele vai percorer cada item do array, aplicar o soma 10, depois o triplo e depois converter paraDinheiro. 
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]


