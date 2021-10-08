/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */


function valorCorreto(valor){
    let convertido = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    let resuFinal = convertido.toString().replace(".", ",") //Converte para string e faz um replace de . para ,
    return resuFinal
}

console.log(valorCorreto(0.1+0.2))


/* info: No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

     * decimal para representar números simples.

     * currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

     * percent para formato percentual.

currency: A moeda para usar na formatação monetária */









// Resolução professor
/*

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

*/

