// let e const
// var escopo de função e global
// let/const tem var+ escopo de bloco

{
    var a = 2
    let b = 3
    const c = 5
    console.log(b) // aqui ele retorna normal, pq let tem escopo de bloco. // 3
    console.log(c) // aqui ele retorna normal, pq const tem escopo de bloco. // 3
}
console.log(a) // aqui eu consigo acessar, pq var não tem escopo de bloco // 2
//console.log(b)  aqui fala que b não foi definido
//console.log(c) aqui fala que b não foi definido

// Template String
const produto = 'Ipad'
console.log(`${produto}
é
caro!`) 
/* Ipad
é
caro! */ // template string reconhece espaço, tab...

// Destructuring
const [l, e,...tras] = 'Cod3r' // l = C, e = o, ...tras = d3r [em um array]
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2, 3]
console.log(x, y) // 1 2
//const [x, , y] = [1, 2, 3]
//console.log(x,y) // 1 3 ..ignora o elemento de indice 2

const {idade, nome} = {nome: 'Ana', idade: 9}
console.log(idade, nome) // 9 Ana
/* pode renomear tbm colocando por ex. const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)  9  Ana  */