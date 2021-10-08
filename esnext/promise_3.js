function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] // ele inverte, colocando o min como max e vice e versa.
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min  // gerar um numero aleatorio entre o max e min.
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60) // gerar um numero aleatorio entre 1, 60 ....
    .then(num => num * 10)  //... depois pega o numero(num) gerado e multipla por 10...
    .then(numx10 => `O número gerado foi ${numx10}`) // depois com o num multplicado, ele retorna a string com o resutado
    .then(console.log) // depois ele mostra o resultado final (string + num*10) no console.log  