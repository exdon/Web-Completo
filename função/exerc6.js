/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples(capIni, txJuros, tempApli){
    let calc = capIni * tempApli * (txJuros / 100)
    let tot = capIni + calc
    return tot.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}).toString().replace(",",".") // para entender, veja o exerc5
}

function jurosComposto(capIni,txJuros, tempApli){
    let calcn = capIni * (1 + txJuros/100) ** tempApli 
    return calcn.toLocaleString('pt-BR',{style:'currency', currency:'BRL'}).toString().replace(",",".")
}



console.log(jurosSimples(100,10,2))
console.log(jurosComposto(100,10,2))










// Resolução professor
/*

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

*/