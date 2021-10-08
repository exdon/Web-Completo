class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends faz Pai herda atributos e funções de Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // sobrenome do avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }