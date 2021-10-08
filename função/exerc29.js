/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function numIntervalo(vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroIntervalo += 1
        } else {
            foraIntervalo += 1
        }
    }
    return `Quantidade de números dentro do intervalo 10-20: ${dentroIntervalo} -- Quantidade de números fora do intervalo 10-20: ${foraIntervalo}`
}

console.log(numIntervalo([10,15,20,5,25,30,2,18,9]))