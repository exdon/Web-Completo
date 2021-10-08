const porta = 3003 // defino a porta

const express = require('express') // importando o express
const app = express() // instanciar o express e atribuir o resultado para a variavel app
const bodyParser = require('body-parser') // importando o body-parser (banco de dados)
const bancoDeDados = require('./bancoDeDados') // importando o arquivo bancoDeDados.js

app.use(bodyParser.urlencoded({ extended: true})) /*urlenconded função middleware que vai fazer um parse no body da requição. 
Qualquer requisição que eu faça no servidor usando express(use não especifica um servidor, usa qualquer um), 
ele vai obrigatoriamente passar por esse middleware. 
E se no corpo da requisição os dados estiverem sendo enviados a partir do formato urlenconded, quando chegar na aplicação,
ele vai fazer esse middleware, que por sua vez irá fazer um parse transformando em obj para poder acessar os dados assim, por exemplo
nome: req.body.name, preco: req.body.preco */

// se for executar o banco de dados, tem que comentar as linhas abaixo...
/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1 ...')
    next()
}) // faz a requisição com uma função middleware()  solicitando a resposta e enviando e vai pro proximo get

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45 }) // converte para JSON
}) // faz a requisição com uma função middleware()  solicitando a resposta e enviando.
*/
//---------------------------------------------------------
// parte para executar o arquivo bancoDeDados.js

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
}) // retornar a lista de produtos

app.get('/produtos/:id', (req, res, next) => { 
    res.send(bancoDeDados.getProduto(req.params.id)) // req.params = local onde estão os parametros de uma requisição na url(id)
}) // atraves do id digitado (ex.produtos/1), traz o produto com aquele id escolhido.

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, // nome a partir do corpo da requisição
        preco: req.body.preco // preco a partir do corpo da requisição
    })
    res.send(produto) // retornar o resultado do const produto em JSON
}) // pra submeter os dados e salvar um novo produto.

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome, 
        preco: req.body.preco 
    })
    res.send(produto) 
}) // faz alteração de um objeto já existente.

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
}) // deleta um objeto já existente.

//----------------------------------------------
// parte essencial para ambos

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
}) // diz em qual porta ele fica escutando e chama um callback()


