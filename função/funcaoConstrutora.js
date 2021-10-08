function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual=  0

    // metodo publico
    this.acelerar =  function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) // 5, pois só chamei uma vez o acelerar

const ferrari = new Carro(350, 20) // passei como velocidade atual = 350 e delta = 20, acelerar de 20 em 20
ferrari.acelerar() //20
ferrari.acelerar() // 40
ferrari.acelerar() // 60
console.log(ferrari.getVelocidadeAtual()) // chamei 3x o acelerar, então o resultado será 60 (20 + 20 + 20)

console.log(typeof Carro) // function
console.log(typeof ferrari) // object