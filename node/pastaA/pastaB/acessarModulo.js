const moduloA = require('../../moduloA') // ../ (saio da pasta atual) ../../ (saio da pasta atual e saio da outra pasta antes dela)
console.log(moduloA.ola) // Fala Pessoal

const saudacao = require('saudacao') // pasta dentro do node modules.
console.log(saudacao.ola)

const c = require('./pastaC/index') //pode omitir o /index, pois dentro da pasta ele sempre procura primeiro o arquivo index. const c = require('./pastaC') 
console.log(c.ola2) // legal

const http = require('http') // http é um modulo interno do node
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080) // escutar na porta 8080 // mostra no browser "bom dia" atraves do localhost:8080