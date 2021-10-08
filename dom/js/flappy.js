function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className // className ou classList.add
    return elem
}
//---- Função construtora -----
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda) // se reverse for true, 1º corpo, depois borda
    this.elemento.appendChild(reversa ? borda : corpo) //se reverse for false, 1º borda, depois corpo

    this.setAltura = altura => corpo.style.height = `${altura}px` //altera a altura do corpo do elemento
}

//const b = new Barreira(true)
//b.setAltura(200)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
    // quando vc coloca dentro de uma função construtora this.algumaCoisa, esse atributo "algumaCoisa" passa a ser visivel fora da função
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) //pega a posição atual da Barreira
    this.setX = x => this.elemento.style.left = `${x}px` //alterando o x para o que foi passado
    this.getLargura = () => this.elemento.clientWidth //saber a largura do elemento

    this.sortearAbertura()
    this.setX(x)
}

//const b = new ParDeBarreiras(700, 300, 400)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 //define velocidade das barreiras
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() +  espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true //quando apertar uma tecla, ele seta voando para true
    window.onkeyup = e => voando = false //quando soltar a tecla, ele seta voando pra false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5) //se ele estiver voando, ele soma 8, se voando = false, ele decrementa -5
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0) //pra que o passaro não passe da div de baixo do jogo
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima) // pra que o passaro não passe da div do topo do jogo.
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

/*const barreiras = new Barreiras(700, 1200, 300, 400)
const passaro = new Passaro(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(passaro.elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

setInterval(() => {
    barreiras.animar()
    passaro.animar()
}, 20)*/

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() //retangulo associado ao elemento a 
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })

    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos)) //quando o passado ultrapassar a barreira, ele adiciona pontos 
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()
