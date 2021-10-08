// coleção dinâmica de pare chave/valor
const produto = new Object //Instancio um novo obj chamado Produto
produto['marca do do produto'] = 'Generica' //adiciono [chave] para esse produto e atribuo (=) um valor
produto.preco = 220 ///adiciono (.chave) para esse produto e atribuo (=) um valor

console.log(produto) // { nome: 'Cadeira', 'marca do do produto': 'Generica', preco: 220 }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereço.numero= 1000 // acessar atraves na notação ponto
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante' // quando vc tem os nomes dos atributos
console.log(carro) /*{ 'marca do do produto': 'Generica', preco: 220 }
{
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    'endereço': { logradouro: 'Av Gigante', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calcularValorSeguro: [Function: calcularValorSeguro]
}

[Done] exited with code=0 in 0.112 seconds */

delete carro.condutores // deleta condutores do obj carro
delete carro.proprietario.endereço // deleta endereço dentro do obj proprietario que esta dentro do obj carro
delete carro.calcularValorSeguro
console.log(carro)/*{ 'marca do do produto': 'Generica', preco: 220 }
{
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    'endereço': { logradouro: 'Av Gigante', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calcularValorSeguro: [Function: calcularValorSeguro]
}
{
  modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 }
}
*/
console.log(carro.condutores) // undefined
console.log(carro.condutores.length) // da erro
