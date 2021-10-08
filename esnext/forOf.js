// forOf intera em cima de valores. como tbm map, set, array, string, obj...

for (let letra of "Cod3r") {
    console.log(letra)
}
/* C
o
d
3
r
 */ // cada string
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}
/* 0
1
2 */ // indices

for(let assunto of assuntosEcma) {
    console.log(assunto)
}
/* Map
Set
Promise */ // valores

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
/* [ 'Map', { abordado: true } ]
[ 'Set', { abordado: true } ]
[ 'Promise', { abordado: false } ] */ // arrays com chave e valor

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

/* Map
Set
Promise */ // só as chaves

for (let valor of assuntosMap.values()) {
    console.log(valor)
}
/* { abordado: true }
{ abordado: true }
{ abordado: false } */ // só os valores

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

/* Map { abordado: true }
Set { abordado: true }
Promise { abordado: false } */ // retorna chave e valor separado, sem array

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}

/*a
b
c */

