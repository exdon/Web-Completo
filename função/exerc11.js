/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */


function eBissexto(ano){
    if(ano <= 0){
        console.log(`${ano} Não é ano bissexto`)
        return false
    }else if(ano % 4 == 0 && ano % 100 != 0){
        console.log(`${ano} É ano bissexto`)
        return true
    } else if (ano % 400 == 0){
        console.log(`${ano} É ano bissexto`)
        return true
    } else {
        console.log(`${ano} Não é bissexto`)
        return false
    }
}

console.log(eBissexto(2020))










// Resolução professor
/*

function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(0))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(800))
console.log(calcularAnoBissexto(2020))
console.log(calcularAnoBissexto(2021))

*/