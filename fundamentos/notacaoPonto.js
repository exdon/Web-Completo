console.log(typeof console) // object
console.log(Math.ceil(6.1)) //7 (ele joga pra cima)

const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2' // sobrescreve o atributo de nome de cima.. com essa te dá mais flexibilidade, porém não é tão recomendada e nem é notação ponto.
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function() {
        console.log('Exec...')
    }
} // this   significa o nome associado ao objeto que for criado a partir da função. atributo público.

const obj2 = new Obj('cadeira') //'cadeira' vai para o this.nome
const obj3 = new Obj('mesa')
console.log(obj2.nome) // cadeira
console.log(obj3.nome) // mesa
obj3.exec() // Exec...
