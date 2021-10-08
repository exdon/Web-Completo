function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com nota ' + nota)
    }
}

soBoaNoticia(8.1) // Aprovado com nota 8.1
soBoaNoticia(6.1) // não mostra nada

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ... ' + valor)
    }
} // só vai executar se der true

seForVerdadeEuFalo() // false
seForVerdadeEuFalo(null) //false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(Nan) // false
seForVerdadeEuFalo('') // false
seForVerdadeEuFalo(0) // false
seForVerdadeEuFalo(-1) // É verdade... -1  
seForVerdadeEuFalo(' ') // É verdade...  
seForVerdadeEuFalo('?') // É verdade... ?
seForVerdadeEuFalo([]) // É verdade...
seForVerdadeEuFalo([1,2]) // É verdade... 1,2
seForVerdadeEuFalo({}) // É verdade...[object, object]