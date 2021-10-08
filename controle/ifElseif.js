Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim // retorne true this(Number) estiver entre inicio e fim, incluindo inicio e o fim, caso não, false.
}

const imprimirResultado = function (nota){
    if (nota.entre(9,10)) { //Se a nota estiver entre 9 e 10
        console.log('Quadro de Honra')
    } else if(nota.entre(7,8.99)){ //Se a nota estiver entre 7,8.99
        console.log('Aprovado')
    } else if(nota.entre(4,6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0,3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}

imprimirResultado(10) //Quadro de honra
imprimirResultado(8.9) //Aprovado
imprimirResultado(6.55) //Recuperaçao
imprimirResultado(2.3) //Reprovado
imprimirResultado(-1) //Nota Inválida
imprimirResultado(11) //Nota Inválida