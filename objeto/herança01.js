const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.prototype) // undefined.
console.log(ferrari.__proto__) //__proto__  para acessar o obj pai. Caso ele não ache no obj ferrari, ele vai procurar no obj pai, se ele mesmo assim não achar, ele retorna undefined.
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null Object.prototype é pai dos pais, não tem nada depois dele

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // function  function
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}