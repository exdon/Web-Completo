const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // vai percorrer cada elemento e o indice dentro de aprovados, e vai chamar a função. forEach tem um laço for.
    console.log(`${indice + 1}) ${nome}`)
})
/* 1) Agatha
2) Aldo
3) Daniel
4) Raquel */


aprovados.forEach(nome => console.log(nome)) // aqui ele retorna apenas os nomes.
/* Agatha
Aldo
Daniel
Raquel */

const exibirAprovados = aprovado => console.log(aprovado) // armazena numa variavel 
aprovados.forEach(exibirAprovados)
/* Agatha
Aldo
Daniel
Raquel
Agatha
Aldo
Daniel
Raquel */

aprovados.forEach(function(nome, indice, array){ 
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
/* 1) Agatha
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
2) Aldo
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
3) Daniel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
4) Raquel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
 */


 // forEach recebe três paramentros : valor, indice e array (nessa ordem)