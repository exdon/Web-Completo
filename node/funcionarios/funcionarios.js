const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios é um client http, faz requisições para obter informações de algo remoto.
// para instalar axios, no terminal use o comando: npm i (ou install) --save axios  (npm i --save axios)

const chineses = f => f.pais === 'China' //retorna os funcionarios(f) que o pais é exatamente igual a china
const mulheres = f => f.genero === 'F' // retorna os funcionarios que o genero é exatamente igual a F
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
} // se o func.salario for menor do que funcAtual.salario, então(?) retorne o func, caso contrario(:) retorne o funcAtual.

//obtem informação do servidor
axios.get(url).then( response => {
    const funcionarios = response.data
    console.log(funcionarios) // mostra a lista de funcionários.
    
    // retorna Mulher chinesa com menor salario.
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func) /* 
    id: 443,
    nome: 'Shela',
    sobrenome: 'Nowell',
    email: 'snowellca@upenn.edu',
    genero: 'F',
    cidade: 'Yufa',
    pais: 'China',
    empresa: 'Quinu',
    salario: 2435.61
  } */
}) //.get() vai obter informação, then() depois de obter ele faz o then.



