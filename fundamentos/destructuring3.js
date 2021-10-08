function rand({ min = 0, max = 1000}) // significa que eu vou passar um objeto pra essa funão e dentro da função eu quero qu ele ja tire de dentro do objeto os atributos (min e max) prontos.
    {const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40} // gera valores randomicos entre 50 e 40.
console.log(rand(obj))
console.log(rand({min: 955})) // fica entre 955 e 1000, que já foi definido como max
console.log(rand({})) // fica entre 0 e 1000
console.log(rand()) // gera erro

