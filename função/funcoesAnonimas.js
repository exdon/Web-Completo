const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //operacao virou uma função que recebe a função soma como parametro padrão, caso não passe nada
    console.log(operacao(a,b))
}


imprimirResultado(3, 4) // 3 + 4 = 7
imprimirResultado(3, 4, soma) // 7  (soma nesse caso não faz diferença)
imprimirResultado(3, 4, function(x, y) { // aqui já foi passado uma função para operação, onde subtraí x por y.
    return x - y
}) // 3 - 4 = -1
imprimirResultado(3, 4, (x, y) => x * y) // aqui passando uma arrow function   3 * 4 = 12

const pessoa = {
    falar: function () {
    console.log('Opa')
    }
} // cria uma função dentro de um objeto

pessoa.falar() // acessa a partir de um atributo de um objeto    Opa