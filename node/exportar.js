console.log(module.exports) // {}
console.log(module.exports == this) // true
console.log(module.exports === exports) //true

// independente de qual forma utilizar abaixo, ele sempre vai apontar para a mesma referencia em memoria
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // isso não faz nada, porque exports recebeu já um valor lá em cima.
console.log(module.exports) // { a: 1, b: 2, c: 3 }

exports = {
    nome: 'Teste'
} // isso tbm não vai mudar o exports nem o module.exports

// forma correta de exportar objeto
module.exports = {publico: true}