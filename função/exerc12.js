// 12) Faça um algoritmo que calcule o fatorial de um número.


function fatorial(num){
    if(num == 1 || num == 0){
        return 1
    } return fatorial(num -1) * num
}

console.log(fatorial(10))



































// resolução professor
/*function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))*/