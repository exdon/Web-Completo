const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento de um array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // adiciona um elemento na ultima posição de um array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro elemento de um array
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição de um array
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa') // a partir do indice 2, incluia 'Botas' e 'Massa'
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Botas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover
pilotos.splice(3,1) // a partir do indice 3, remova 1 elemento ('Massa')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Botas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir de um indice informado (no caso 2)
console.log(algunsPilotos1) // [ 'Botas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // ele pega o elemento indice 1 e vai até o 4 (porém 4 não entra).
console.log(algunsPilotos2) // [ 'Alonso', 'Botas', 'Raikkonen' ]
