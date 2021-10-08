/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

/* function calculo(a, b){
    return resul = {soma: a + b,
    sub: a - b,
    mult: a * b,
    div: a / b
    }
} */

function calculo(a, b){
    console.log(`Os cálculos matemáticos de ${a} e ${b} são:
    Soma: ${a+b}, Subtração: ${a-b}, Multiplicação: ${a*b}, Divisão: ${a/b}`)
}


calculo(5,3)






// resolução professor
/* 

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2) 

*/
