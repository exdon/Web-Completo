// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b= b || 1
    c= c || 1
    return a + b + c
}

console.log(soma1()) // 3
console.log(soma1(3)) // 5
console.log(soma1(1, 2, 3)) //6
console.log(soma1(0, 0, 0)) // aqui zero retorna false, então ele volta seu resultado declarado na variavel, logo 3

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for diferente de undefined, caso seja diferente (?) ele vai pegar o próprio valor de a, e se o a == undefined, ele assume o valor 1
    b = 1 in arguments ? b : 1 // existe dentro de arguments o indice 1?, se existir, pegue o valor de b, e se b == undefined, declare como 1
    c = isNaN(c) ? 1 : c // O valor de c is NaN ? sim, então atribua o valor 1 a ele.
    return a+b+c
}

console.log(soma2()) //3 3
console.log(soma2(3)) //5 5
console.log(soma2(1, 2, 3)) //6 6
console.log(soma2(0, 0, 0)) //3 0

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2()) //3 
console.log(soma2(3)) //5 
console.log(soma2(1, 2, 3)) //6 
console.log(soma2(0, 0, 0)) // 0

