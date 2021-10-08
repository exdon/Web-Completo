const express = require('express')  // importa o express
const app = express() //instancia o express  e associa a varivel app
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true})) // se não tiver essa parte, ele retorna no console undefined

app.post('/usuarios', (req, resp) => {
    console.log(req.body) // mostra no console o que foi digitado no input
    resp.send('<h1>Parabéns. Usuário Incluído!</h1>') // após digitar algo no input, ele mostra essa msg
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body) // mostra no console o que foi digitado no input
    resp.send('<h1>Parabéns. Usuário Alterado!</h1>') // após digitar algo no input, ele mostra essa msg
})

app.listen(5500)