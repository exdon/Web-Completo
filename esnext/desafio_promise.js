const fs = require('fs')
const path = require('path')



function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) { // após ele ler o arquivo, ele faz a função.
            resolve(conteudo.toString()) // converte o conteudo pra string
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho) // ele le o arquivo (faz o que a função tem que fazer)...
    .then(conteudo => console.log(conteudo))//...depois ele mostra o conteudo do arquivo no console.log  /* linha 1 linha 2 linha 3 */
    //se eu quiser pegar apenas um elemento do arquivo...
    /*.then(conteudo => conteudo.split('\n')) // quebro o conteudo em linhas...
    .then(linhas => console.log(linhas[1])) // ...vai mostrar o conteudo da linha 2(indice1) // linha 2*/
    //se eu quiser mostrar quantos elementos eu tenho no arquivo...
    /*.then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas.length))*/ // 3
    // em vez de ter cada elemento em uma linha, eu quero separar por ','(virgula)
    /*.then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)*/   // O valor final é: linha 1, linha 2, linha 3
