console.log('a =', a) //a = undefined
var a = 2
console.log('a =', a) //a = 2

// ele eleva a variavel para a chamada de console acima, mesmo que ela não tenha sido declarado antes. Se não declarar a variavel, ai sim ele retorna is not defined.


console.log('b =', b) // b is not defined
let b = 2
console.log('b =', b) // b is not defined 

// nesse caso com let, isso não tem o mesmo efeito.