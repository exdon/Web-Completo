class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar() // Meu nome é João


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // aqui não precisa do this.nome, pq esse obj tem ciência do escopo lexico que ele foi criado.
    }
} 

const pessoa2 = criarPessoa('Paulo')
pessoa2.falar()