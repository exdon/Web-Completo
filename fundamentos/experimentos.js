let a = 3

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a) //3
console.log(global.b)  //123
console.log(this.c)  //456
console.log(module.exports.c)  //456
console.log(module.exports === this)  //true
console.log(module.exports) //{c: 456, d: false, e: 'teste'}

//criando uma variavel maluca: sem var e let
abc = 3 // não faça isso em casa!!!
console.log(global.abc) // 3

// module.exports = {e: 456, f: false, g: 'teste'}