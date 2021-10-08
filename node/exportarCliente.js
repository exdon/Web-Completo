const exportar = require('./exportar')
console.log(exportar)
/* true
true
{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 } */


// depois de incluir o module.exports = {publico: true}
/*  true
true
{ a: 1, b: 2, c: 3 }
{ publico: true }*/