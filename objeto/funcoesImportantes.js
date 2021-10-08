const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //[ 'nome', 'idade', 'peso' ]  pega as chaves do obj
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ] pega os valores do obj
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ] um array com subarrays composto de chave e valor

Object.entries(pessoa).forEach(e => { //percorer no array cada elemento dentro do obj pessoa
    console.log(`${e[0]}: ${e[1]}`) /*  nome: Rebeca
                                        idade: 2
                                        peso: 13    */ 
});

//ou

Object.entries(pessoa).forEach(([chave, valor]) => { //operador destructure
    console.log(`${chave}: ${valor}`)
}) /*   nome: Rebeca
        idade: 2
        peso: 13 */

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //será listado?
    writable: false, // podera ser modificada?
    value: '01/01/2019'
}) //definir algumas caracteristicas de uma propriedade

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) //01/01/2019  não deixara alterar pela condição que coloquei

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso', 'dataNascimento' ] ele lista, pq esta permitido enumerable:true. 
// se lá estivesse enumerable: false, ele não listaria dataNascimento [ 'nome', 'idade', 'peso'], embora é possivel acessar.

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a: 4 }
const obj = Object.assign(dest, o1, o2) //concatena os demais objetos com o primeiro (dest) se o valor já existir, ele sobrescreve. O que prevalece é sempre o ultimo.


console.log(obj) // { a: 4, b: 2, c: 3 }