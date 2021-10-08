const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // O método JSON.stringify() converte valores em javascript para uma String JSON.
    console.log(err || 'Arquivo salvo!') // ele traz o erro ou msg arquivo salvo. // Arquivo salvo!
}) // writeFile ('nome do arquivo que vc quer gerar.json, e o que vc quer converter()')