let isAtivo = false
console.log(isAtivo) // resultado = false

isAtivo = true
console.log(isAtivo) //altera o valor de cima, para true   resultado = true

isAtivo = 1
console.log(!!isAtivo) //!! verifica se o isAtivo é verdadeiro   resultado = true
console.log(!isAtivo) // ele inverte e logica, tornando o resultado falso  resultado = false
console.log(!true)  //!true, lê Não(!) true   resultado = false
console.log(!false) // !false, lê Não(!) false  resultado = true
console.log(!!true) // resultado = true 
console.log(!!false) // resultado = false  

console.log('os verdadeiros...') // todos abaixo retorna como resultado = true
console.log(!!3) 
console.log(!!-1) 
console.log(!!' ') //string com algo dentro, mesmo que seja um espaço
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))

console.log('os falsos...') //todos abaixo retorna como resulado = false
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) //   ||significa(ou)     resultado = true , porque uma das expressões é verdadeira, no caso ' '
console.log('' || null || 0 || 'epa') // ele retorna o unico ou o primeiro valor verdadeiro  resultado = epa

let nome = ''
console.log(nome || 'Desconhecido') // resultado = Desconhecido  , porque ele retornou nome como false, logo o ||(ou) retorna o uncido valor true
let nome = 'Lucas'
console.log(nome || 'Desconhecido') // Lucas é true, logo ele não retorna Desconhecido e sim  resultado = Lucas

