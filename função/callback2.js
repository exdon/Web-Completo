const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1) // [6.5, 5.2, 3.6]

// Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
}) // filter é uma função que irá filtrar os elementos de um array com um determinado criterio ( )
console.log(notasBaixas2) // [6.5, 5.2, 3.6]

const notasBaixas3 = notas.filter(nota => nota < 7) // com arrow function
console.log(notasBaixas3) // [6.5, 5.2, 3.6]

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4) // [6.5, 5.2, 3.6]
