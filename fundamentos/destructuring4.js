function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // se o min for maior que o max, faça min ser o max e vice e versa.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992])) // entre 992 e 1000
console.log(rand([,10])) // entre 0 e 10
console.log(rand([])) // entre 0 e 1000
console.log(rand()) // gera erro
