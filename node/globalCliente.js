require('./global')

console.log(MinhaApp.saudacao()) // Estou em todos os lugares!

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // Eita!  deixa de ser sistema legal e passa a ser eita.
/* para não conseguir alterar, pode ser aplicado o metodo freeze

globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

*/