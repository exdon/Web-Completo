// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const { setupMaster } = require("cluster");

function media(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma / numeros.length
}
console.log(media([5,9,15,6]))