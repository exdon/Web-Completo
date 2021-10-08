// ter um codigo que parece sincrono, mas na vdd ele é um codigo assincrono.

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() { // depois do tempo passado, ele chamará o resolve.
            console.log('Executando promise...') // se for usar o console na chamada, tem que tirar daqui.
            resolve()
        }, tempo)
    })
}

esperarPor(2000)
    .then(() => console.log('Executando promise 1...')) // se for colocar aqui, tem que tirar da função o console.log.
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor  = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

//executar().then(console.log) // depois de executar a função async, ai ele ira retornar o valor + 3 // 13


async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}






