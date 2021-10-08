let a = 1
console.log(a) // 1

// Promise = tem um promessa de algo que sera executado no futuro e uma resposta de algo no futuro.
console.log(typeof Promise) // function

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3) // a promessa só pode passar um unico valor(parametro)
})// precisa passar uma funçao como parametro.

/* para passar mais de um valor, é necessário criar um obj, ou uma lista. Ex obj abaixo.
 let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x:3,
        y:4
    })
}) */

console.log(typeof p) // object

// quando o valor 3 for cumprido, a resolução abaixo é chamada.
/*p.then(function(valor){
    console.log(valor) // 3
})*/
// para ficar mais moderno, faça igual abaixo.
p.then(valor => console.log(valor)) // 3  é a mesma coisa do exemplo acima, porém mais moderno com arrow function.


// outro exemplo com array

let pe = new Promise(function(cumprirPromessa2) {
    cumprirPromessa2(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    //.then(valor => console.log(valor)) // [ 'Ana', 'Bia', 'Carlos', 'Daniel' ]
    //.then(valor => valor[0])
    .then(primeiroElemento)
    //.then(valor => console.log(valor)) // Ana
    //.then(primeiro => primeiro[0])
    //.then(letra => console.log(letra)) // A
    .then(primeiraLetra)
    //.then(letra => letra.toLowerCase())
    .then(letraMinuscula)
    //.then(letraMinuscula => console.log(letraMinuscula)) // a
    .then(console.log) // a
    

// o resultado de um metodo then é passado para o proximo metodo.
