/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

function primeira(vetor, num) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i]*num)
    }
    return resultado
}

function segunda(vetor2, n) {
    let resultado2 = []
    for (let i = 0; i< vetor2.length; i++) {
        if (vetor2[i] > 5) {
            resultado2.push(vetor2[i]*n)
        }
    }
    return resultado2
}


console.log(primeira([2,4,6], 2))
console.log(segunda([6,2,8,1], 2))