let comparaComTthis = function(param) {
    console.log(this === param)
}

comparaComTthis(global) //true


const obj = {}
comparaComTthis = comparaComTthis.bind(obj)
comparaComTthis(global) // false
comparaComTthis(obj) // true

let comparaComTthisArrow = param => console.log(this === param)
comparaComTthisArrow(global) // false
comparaComTthisArrow(module.exports) // true

comparaComTthisArrow = comparaComTthisArrow.bind(obj)
comparaComTthisArrow(obj) // false
comparaComTthisArrow(module.exports) // true
