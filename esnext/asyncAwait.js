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

// Recurso do ES8
// Objetivo de simplicar o uso de promises..
let obterAlunos = async () => {
    const ta = await getTuma('A') // em vez de fazer o then, eu chamo de assim de forma sincrona.
    const tb = await getTuma('B')
    const tc = await getTuma('C')
    return [].concat(ta, tb, tc) // retorna um array com as turmas.
} // retorna um obj AssyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

/*[
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
] */