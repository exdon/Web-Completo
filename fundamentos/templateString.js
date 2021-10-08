const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // Resultado = olá Rebeca !

const template = `
    Olá
    ${nome}!` //ele também funciona, e considera os espaços dados, mesmo quebrando linha. resultado = Olá
             //                                                                                       Rebeca!
console.log(concatenacao, template)  

// expressoes..

console.log(`1 + 1 = ${1 + 1}`) // ele não soma os primeiros 1 + 1, mas o que está entre ${}, ele soma. resultado = 1 + 1 = 2

const up = texto => texto.toUpperCase() //transforma todas as letras em maíscula.
console.log(`Ei... ${up('cuidado')}!`) //resultado = Ei...CUIDADO!

