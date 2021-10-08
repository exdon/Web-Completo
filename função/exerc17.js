/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
 A     10%
 B     15%
 C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/


function aumento(plano, salario){
    switch(plano){
        case 'a':
        case 'A':
            console.log(`Com 10% de aumento = ${salario + (salario * 10/100)}`)
            break;
        case 'b':
        case 'B':
            console.log(`Com 15% de aumento = ${salario + (salario* 15/100)}`)
            break;
        case 'c':
        case 'C':
            console.log(`Com 20% de aumento = ${salario + (salario * 20/100)}`)
            break;
        default:
            console.log('Plano inválido!')
    }
}

aumento('c', 1200)




















// resolução professor
/*function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000)); */
