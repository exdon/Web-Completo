function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5) // chance de erro de 50% (0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`) //Erro: ReferenceError: consol is not defined
        )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro: ${err}`)) // aqui ele faz o tratamento de erro Erro: Ocorreu um erro!
    .then(() => console.log('Fim!')) // esse será sempre mostrado assim, pq depois do catch nada sera obtido.