// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a+b)

}//função anonima  

imprimirSoma(2,3) 

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a+b
}// => substituí o nome function 

console.log(soma(2, 3)) //5

// Retorno implícito 

const subtracao = (a,b) => a-b // => (arrow function) funciona quando se tem apenas um unica linha de código, no caso só o return
console.log(subtracao(2,3)) // -1

const imprimir2 = a => console.log(a) // função de um unico parametro 
imprimir2('legal!!!') // legal!!!