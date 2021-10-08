// sem promise, usando callback
const http = require('http') // faz a requisição para obter o resultado de uma pagina http

const getTuma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado)) // converte os dados obtidos para obj
        })
    })
}

let nomes = []
getTuma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) // map para pegar somente os nomes de aluno.
    getTuma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTuma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})



/* [
  'A: Kellia',   'A: Hi',     'A: Inge',
  'A: Myrle',    'A: Doreen', 'A: Pennie',
  'A: Faye',     'A: Leena',  'A: Taylor',
  'A: Juieta',   'B: Rossie', 'B: Mary',
  'B: Dionysus', 'B: Myca',   'B: Sharlene',
  'B: Meghan',   'B: Perice', 'B: Micheil',
  'B: Nat',      'B: Bone',   'C: Kellina',
  'C: Barrie',   'C: Darda',  'C: Rainer',
  'C: Joan',     'C: Kasper', 'C: Sammie',
  'C: Scott',    'C: Kiel',   'C: Dell'
]
 */