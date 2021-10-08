function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {  // dispara uma outra função a partir de um determinado intervalo que vc passou 
        self.idade ++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // a cada 1000 milisegungos (1 segundo), essa função será disparada
}

new Pessoa