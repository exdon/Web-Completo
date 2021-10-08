function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {
        [max, min] = [min, max] // ele inverte, colocando o min como max e vice e versa.
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min  // gerar um numero aleatorio entre o max e min.
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) { // gera um range de numeros de acordo com a qtt passada.. mesma coisa que o range do python.
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 10) {
            throw 'Não deu certo!'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}
    
gerarMegaSena(15)
    .then(console.log)
    .then(console.log)