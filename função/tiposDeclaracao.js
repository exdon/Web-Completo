console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
} // fazendo a função dessa forma, eu posso ter codigo chamando ela, antes mesmo dela ter sido declarada, pois o JS carrega primeiro as funções pra depois o resto do código.

//console.log(sub(3, 4 ))  da erro
// function expression
const sub = function(x, y) {
    return x - y
} // Já nesse tipo de função, eu preciso primeiro declarar a função, pra depois chamar ela.
console.log(sub(3, 4 )) // -1  da certo !


// console.log(mult(3, 4 )) da erro
// named function expression
const mult  = function mult(x, y) {
    return x * y
} // o mesmo acontece com esse tipo de função
console.log(mult(3, 4 )) // 12  da certo!

