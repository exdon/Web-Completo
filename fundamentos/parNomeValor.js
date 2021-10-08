// par nome/valor
const saudacao = 'opa' //contexto léxico 1 (em que local fisíco do código, aquela variavel foi definida)

function exec () {
    const saudacao = 'falaa' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao) // opa
console.log(exec()) // falaa
console.log(cliente) // {nome: 'Pedro', idade: 32, pedo: 90, endereco: {logradouro:'Rua Muito Legal', numero: 123} }