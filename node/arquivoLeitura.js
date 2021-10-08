const fs = require('fs') // file system modulo interno do node

const caminho = __dirname + '/arquivo.json' //__dirname informa o caminho absoluto do diretório que contém o arquivo em execução no momento

/* Síncrona

Quando uma requisição é enviada, o processo remetente é bloqueado até que ocorra uma resposta,
ou seja, não é possível enviar novas requisições até que nossa requisição atual seja finalizada, 
existe sincronismo entre as requisições.

Assíncrona

Em uma requisição assíncrona, não existe sincronismo entre as requisições, 
sendo assim, podemos enviar diversas requisições em paralelo, onde cada resposta retorna quando estiver pronta. */


// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // ler um arquivo de forma sincrona 'utf-8' encoding
console.log(conteudo)
/* {
    "db": {
        "host":"localhost",
        "port": 5432,
        "user": "usuario",
        "pass": "123456"
    }
}
 */

 // assincrona
 fs.readFile(caminho, 'utf-8', (err, conteudo) => { // callback()
    const config = JSON.parse(conteudo) // converte o arquivo JSON
    console.log(`${config.db.host}:${config.db.port}`) // localhost:5432
 })


 // forma mais simples de ler um arquivo JSON
 const config = require('./arquivo.json')
 console.log(config.db) // { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

 // leitura de uma pasta
 fs.readdir(__dirname, (err, arquivos) => { // readdir = leia um diretorio
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
 }) 

 /* Conteúdo da pasta...
[
  'arquivo.json',
  'arquivoLeitura.js',
  'exportar.js',
  'exportarCliente.js',
  'funcionarios',
  'global.js',
  'globalCliente.js',
  'instanciaCliente.js',
  'instanciaNova.js',
  'instanciaUnica.js',
  'moduloA.js',
  'moduloB.js',
  'moduloCliente.js',
  'node_modules',
  'package-lock.json',
  'passandoParametros.js',
  'passandoParametrosCliente.js',
  'pastaA',
  'this.js',
  'usandoModulosTerceiros.js'
] */
