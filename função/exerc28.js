// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function parOuImpar(array) {
    let par = 0
    let impar = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            par += 1
        } else if(array[i] % 2 == 1) {
            impar += 1
        }
    }
    return `Pares:${par} Impares:${impar}`
}

console.log(parOuImpar([2,3,15,22,4,8,31]))



