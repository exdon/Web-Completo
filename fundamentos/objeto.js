const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 // evitar atributos com espaço, porém é possivel.

console.log(prod1) // resultado = { nome: 'Celular ultra mega', preco: 4998.9, 'Desconto legal': 0.4 }

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}



console.log(prod2)

