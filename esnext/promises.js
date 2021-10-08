function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve(frase) //  resolve só aceita um paramentro.
        }, segundos * 1000) // pra converter um numero int em segundos.
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //.catch pra tratar erro.

    // Que legal!?!?