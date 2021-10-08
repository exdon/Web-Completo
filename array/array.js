console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados) //[ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') // adiciona elemento no array na ultima posição
console.log(aprovados.length) //5

aprovados[9] = 'Rafael' // ele adiciona no indice 9..os no meio [6,7,8] ficam como undefined
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // false

console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort() // ele ordena o array ordem alfabetica/numerica
console.log(aprovados) // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1]
console.log(aprovados) // [ 'Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]
console.log(aprovados[1]) // undefined

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // adiciona elementos em um determinado indice, como remove tbm elementos. Primeiro o indice que vc quer começar, depois a quantidade de itens que quer deletar, começando pelo indice que vc começou.
console.log(aprovados) //[ 'Bia', 'Ana' ]
aprovados.splice(1,2) // remove o Carlos e a Ana
console.log(aprovados) // [ 'Bia' ]
aprovados.splice(1 ,2 , 'Elemento1', 'Elemento2') // aqui ele remove o Carlos e a Ana. Depois adiciona elemento 1 e elemento 2
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // ele não remove ninguém, mas adiciona elemento1 e elemento2 depois do indice 1
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]