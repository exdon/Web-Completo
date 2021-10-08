// Factory simples
// Factory é uma função que retorna um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
        }
}

console.log(criarPessoa()) // {nome: 'Ana', sobrenome: 'Silva'}