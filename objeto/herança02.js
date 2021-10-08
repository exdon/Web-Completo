// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa!

const avo = {attr1: 'A'} // tem como prototipo Object.prototype
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} // tem como prototipo o avo
const filho = {__proto__: pai, attr3: 'C'} // tem como prototipo o pai
console.log( filho.attr0, filho.attr1, filho.attr2, filho.attr3) // 0, A, B, C

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super usado para referenciar o prototipo
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem como prototipo carro
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())