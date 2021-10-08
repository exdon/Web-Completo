const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //dentro da pasta atual(.) onde o server.js está, sirva os arquivos estáticos.
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) // transforma o que vier em json para objeto

const multer = require('multer')

const storage = multer.diskStorage({ //serve para config a pasta onde vc irá salvar os arquivos de upload, como tbm config o nome dos arquivos no momento do salvamento.
    destination: function (req, file, callback) {
        callback(null, './upload') //chama um callback para salvar na pasta upload
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //salva o arquivo com o nome dele contendo a data atual + nome original dele.
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))