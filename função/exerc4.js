/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao(dividendo, divisor){
    let res = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`${dividendo} / ${divisor} = ${res} e o resto da divisão é ${resto}`)
}

divisao(8,3)











// Resolução professor
/*

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

*/