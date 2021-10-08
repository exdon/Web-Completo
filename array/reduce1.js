const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}) //ele vai pegar cada nota, depois com essa nota, ele joga como acumulador e ai ele vai somar com a proxima (atual), e o resultado será somado com a proxima. Ex. 7.3 + 9.2 = 16.5 + 9.8 = 26.3 + 8.7 = 35

console.log(resultado)
/* 7.3 9.2
16.5 9.8
26.3 8.7
35 */

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10) // aqui é informado um valor inicial = 10. todas as notas serão somadas com 10(acumulador).

console.log(resultado2)
/* 10 7.3
17.3 9.2
26.5 9.8
36.3 8.7
45 */

// Ou seja, valor anterior + valor atual, depois resultado dessa soma + proximo valor.
