// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3) // 5
imprimirSoma(2) //NaN  (2 + undefined)
imprimirSoma(2,3,4,5,6,7,8) // 5  (ele vai somar os dois primeiros e o resto vai ignorar)
imprimirSoma() // NaN

// função com retorno

function soma(a,b = 1) { //b foi pré definido como 1, caso não seja passado nenhum valor para ele.
    return a+b
}

console.log(soma(2,3)) // 5
console.log(2) // 3 (2+1)



