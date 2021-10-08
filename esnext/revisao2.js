// Arrow function
// sempre são funções anonimas, não é possivel atribuir um nome a ela. Apenas atribuir ela a uma variavel/constante.
const soma = (a, b) => a + b // (parametros) =>(arrow function) a + b (return implicito).
console.log(soma(2, 3)) // soma de 2 + 3 = 5 
// se colocar um corpo na função, ai sim precisa do return.
const soma2 = (a, b) => {
    //a + b assim retorna undefined
    return a + b
}
console.log(soma2(2,3)) // 5 

// Arrow function (this)
const lexico1 = () => console.log(this === exports) 
const lexico2 = lexico1.bind({}) // isso não irá funcionar, continuara o this apontando para exports.
lexico1()
lexico2()

// parametros default
// você consegue definir um valor padrão pra ele, caso não seja informado um valor.
function log(texto = 'Node') {
    console.log(texto)
}
log(undefined) // retorna Node
log() // Node
log(null) // null .. significa que vc quer um tetxo nulo, então ele não assume o valor padrão.
log('Sou mais forte') // Sou mais forte. Aqui vc definiu um valor padrão pra ele, então ele assume esse valor definido.

// operador rest
// permite adicionar varios valores aos paramentros e agrupa esses valores em um array interno dentro da função.
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n) // pega cada numero dentro de numeros, e atribui a var total somando com n
    return total
}

console.log(total(2, 3, 4, 5)) // 14