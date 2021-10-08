/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/


function weekWeekend(day){
    switch(day){
        case 1:
        case 8:
        case 15: 
        case 22:
        case 29:
            console.log(`${day} é Domingo, final de semana!`)
            break;
        case 2:
        case 9:
        case 16:
        case 23:
        case 30:
            console.log(`${day} é Segunda e é um dia útil`)
            break;
        case 3:
        case 10:
        case 17:
        case 24:
        case 31:
            console.log(`${day} é Terça e é um dia útil`)
            break;
        case 4:
        case 11:
        case 18:
        case 25:
            console.log(`${day} é Quarta e é um dia útil`)
            break;
        case 5:
        case 12:
        case 19:
        case 26:
            console.log(`${day} é quinta e é um dia útil`)
            break;
        case 6:
        case 13:
        case 20:
        case 27:
            console.log(`${day} é Sexta e é um dia útil`)
            break;
        case 7:
        case 14: 
        case 21: 
        case 28:
            console.log(`${day} é Sábado, final de semana!`)
            break;
        default:
            console.log(`${day} não é um dia válido!`)
            break;
    }
}


weekWeekend(32)















// resolução professor
/*function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a')); */