// com promise
const http = require('http') // faz a requisição para obter o resultado de uma pagina http

const getTuma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => { // 'end' quando o resultado finalizar, então faça a função () arrow =>
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) { // caso dê erro
                    reject(e)
                }
            })
        })
    })
}
/*
let nomes = []
getTuma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`)) // map pra extrair apenas os nomes de alunos.
    getTuma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTuma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
*/ // aqui é uma chamada sequencial, faz uma, depois faz a outra...

Promise.all([getTuma('A'), getTuma('B'), getTuma('C')]) 
    .then(turmas => [].concat(...turmas)) // isso junta os arrays da matriz em um unico array.
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch( e => console.log(e.message)) // pra tratar qualquer problema que tenha na execução da promise.
// aqui ele dispara parelelo, espera a resolução de todas as promises, para então fazer o passo a passo (then)

getTuma('D').catch( e => console.log(e.message)) // Unexpected token < in JSON at position 0


/* [
  'Kellia',   'Hi',     'Inge',
  'Myrle',    'Doreen', 'Pennie',
  'Faye',     'Leena',  'Taylor',
  'Juieta',   'Rossie', 'Mary',
  'Dionysus', 'Myca',   'Sharlene',
  'Meghan',   'Perice', 'Micheil',
  'Nat',      'Bone',   'Kellina',
  'Barrie',   'Darda',  'Rainer',
  'Joan',     'Kasper', 'Sammie',
  'Scott',    'Kiel',   'Dell'
]
 */