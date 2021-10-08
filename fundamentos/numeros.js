const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // Saber o peso1 é valor inteiro. 1.0 é considerado int, 1.1 é float
console.log(Number.isInteger(peso2))

const avaliação1 = 9.871
const avaliação2 = 6.871

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) // toFixed() o numero de casas decimais que vc deseja
console.log(media.toString(2)) // toString(2) converte para binario
console.log(typeof media)
console.log(typeof Number) // Number é função .. number é o tipo do dado, no caso numerico.


