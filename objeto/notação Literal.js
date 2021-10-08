const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // essa opção permite que mude o nome do atributo.
const obj2 = {a, b, c}
console.log(obj1,obj2) // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // { nota: 7.87 }

const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4) // { nota: 7.87 }

const obj5 = {
    função1: function() { //versão mais longa
        //...
    } ,
    função2() { // versão nova EQS 2015
        //...
    }
}

console.log(obj5) // { 'função1': [Function: função1], 'função2': [Function: função2] }
