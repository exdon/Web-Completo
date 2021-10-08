/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()*/

// isso acima numa função construtora fica da forma abaixo.

function Pessoa (nome) {
        this.nome = nome // se eu tirar essa parte ...

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`) // ... e tirar o this daqui, deixando só o nome, funciona tbm... porém..
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()
console.log(pessoa1.nome) // ...aqui eu não teria acesso ao nome ('João'), retornaria undefined
