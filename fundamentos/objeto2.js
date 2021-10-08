console.log(typeof Object) //function
console.log(typeof new Object) // object   pode ter () ou não ex. object()

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) // function
console.log(typeof new Produto()) //object