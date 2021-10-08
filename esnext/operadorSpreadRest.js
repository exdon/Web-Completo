// operador ... rest(juntar)/spread(espalhar)
// usar rest com paramêtro de função.

// usar spread com obj
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone) // { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal) // [ 'Maria', 'Rafaela', 'Joao', 'Pedro', 'Gloria' ]