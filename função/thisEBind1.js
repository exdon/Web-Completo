const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // Bom dia!
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO  retorna undefined

const falarDePessoa = pessoa.falar.bind(pessoa) //aqui o this sempre será o objeto que foi passado pra função bind
falarDePessoa() // Bom dia!