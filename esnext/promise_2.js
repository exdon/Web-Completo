/*
setTimeout(function() {
    console.log('Executando 1º callback...')
    
    setTimeout(function() {
        console.log('Executando 2º callback...')
        
        setTimeout(function() {
            console.log('Executando 3º callback...')

        }, 2000)
    }, 2000)
}, 2000) // depois de 2 segundos, ele chama o console.log

*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() { // depois do tempo passado, ele chamará o resolve.
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
/* ele vai esperar 2 seg. executar o "Executando promise..."
 depois mais 2 seg, e de novo "Executando promise", depois mais 2 seg.. e de novo "Executando promise..."*/
/*Executando promise...
Executando promise...
Executando promise...*/
