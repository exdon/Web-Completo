/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function mes(n) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
     'Setemebro', 'Outubro', 'Novembro', 'Dezembro']
    for (let i = n; i <= meses.length; i++) {
        return meses[i-1]
    }
}

function jurosComposto(capIni,txJuros, temp){
    let calcn = capIni * (1 + txJuros/100)** temp
    return calcn
}

function calcularValor(n, valor) {
    return `O valor a ser pago em ${mes(n)} é de R$${jurosComposto(valor, 5, n-1).toFixed(2)}`
}

console.log(calcularValor(2, 100))
console.log(calcularValor(4, 100))









// Resolução professor
/*
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))
 */