/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function numNegativos(numeros) {
    let quantidade = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            quantidade += 1
        }
    }
    return quantidade
}

console.log(numNegativos([-1,-5,-8,2,10,-25]))