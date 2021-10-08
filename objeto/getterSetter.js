const sequencia = {
    _valor: 1, // convenção. pretente ser acessada somente internamento, porém _ não obriga .
    get valor() {return this._valor++}, //get cria o valor como função
    set valor(valor) { // set passa atributo valor pra valor
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // 1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000  1001
sequencia.valor = 900 // ele ignora, pois só vai trazer valores após 1000, por conta do if
console.log(sequencia.valor, sequencia.valor) // 1002 1003