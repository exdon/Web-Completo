function teste1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final')
} //a identação não surge efeito nenhum na lógica do cód.

teste1(6) // final
teste1(8) // 8 final

function teste2(num) {
    if(num > 7) ; { // cuidado com o ; não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6) // 6 
teste2(8) // 8
// ele mostra os dois, por conta do ; , pois ele está separando o console da lógica do if.

