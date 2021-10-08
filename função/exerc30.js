// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorEMenor(listaNum) {
    let maior = listaNum[0]
    let menor = listaNum[0]
    for(let i = 0; i < listaNum.length; i ++) {
        if (listaNum[i] > maior) {
            maior = listaNum[i]
        } else if (listaNum[i] <= menor) {
            menor = listaNum[i]
        }
    }
    return `O maior valor é: ${maior} e o menor valor é: ${menor}`
}

console.log(maiorEMenor([5,8,1,9]))