/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */


let pontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function recorde(pontuacoes) {
    let pontuacao = pontuacoes.split(", ") // separar cada item após a (,) e ("espaço").
    let maiorRecorde = 0
    let piorPlacar = 0
    let maiorPontuacao = pontuacao[0] // maior pontuação recebe o primeiro item
    let menorPontuacao = pontuacao[0] // menor pontuação recebe o primeiro item

    for(let i = 1; i < pontuacao.length; i++){
        if(pontuacao[i] > maiorPontuacao){ 
            maiorPontuacao = pontuacao[i]
            maiorRecorde += 1
        } else if(pontuacao[i] < menorPontuacao){
            menorPontuacao = pontuacao[i]
            piorPlacar = i+1
        }
    } return [maiorRecorde, piorPlacar]
}

console.log(recorde(pontuacoes))