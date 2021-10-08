function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1,aula2) // Aula { nome: 'Bem vindo', videoID: 123 } Aula { nome: 'Até breve', videoID: 456 }

// simulando o new
function novo(f, ...params) { //... ele concatena tudo em um array
    const obj = {}
    obj.__proto__ = f.protype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4) // { nome: 'Bem Vindo', videoID: 123 } { nome: 'Até Breve', videoID: 456 }