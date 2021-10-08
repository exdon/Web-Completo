/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1,5,8,6]
let vetorString = ['olá', 'prazer', 'js','code']
let vetorDouble = [1.3, 2.5, 8.7, 9.4]

let concat1 = vetorInteiro.concat(vetorString)
let concat2 = vetorString.concat(vetorDouble)
console.log(concat1)
console.log(concat2)