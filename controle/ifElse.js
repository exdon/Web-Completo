const imprimirResultado = function(nota) {
    if(nota > 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10) //Aprovado
imprimirResultado(4) //Reprovado
imprimirResultado('Epa!') //Reprovado (como ele não consegue comparar uma string, ele vai pro else automaticamente) erro. CUIDADO!!