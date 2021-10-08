var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //2
}
console.log('fora =', numero) //1

let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //2
}
console.log('fora =', numero) //1

let numero = 1
{
    let numero2 = 2
    console.log('dentro =', numero) //1  pimeiro ele procura no escopo dentro do bloco {}, caso ele não ache ele vai pro escopo mais abrangente.
}
console.log('fora =', numero) //1

// diferenças entre let e var:
// var =  tem escopo global e escopo de função
// let = tem escopo global, escopo de função e escopo de bloco