/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */


function quitanda(fruta){
    switch(fruta){
        case 'maçã':
        case 'maca':
        case 'maça':
            console.log(`Não vendemos ${fruta} aqui`)
            break;
        case 'kiwi':
            console.log(`Estamos com escassez de ${fruta}`)
            break;
        case 'melancia':
            console.log(`Aqui está! São 3 reais o quilo da ${fruta}`)
            break;
        default:
            console.log(`${fruta} não é uma opção válida!`)
    }
}

quitanda('maça')
























// resolução professor
/* function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra') */