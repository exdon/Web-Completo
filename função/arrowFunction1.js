let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
} 

dobro = a => 2 * a // funções de uma unica linha, return implícito 

console.log(dobro(Math.PI))

// todas as funções acima, fazem a mesma coisa, retornam o dobro de um numero(a)

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro

console.log(ola())

