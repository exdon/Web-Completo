const [a] = [10]
console.log(a) // 10

//     0  1  2  3  4   5           0 1 2 3   indices
const [n1, , n3, , n5, n6 = 0] = [10,7,9,8] // n1 = 10  , , = 7  n3 = 9  , , =8  n5 = undefined  n6 = 0 
console.log(n1, n3, n5, n6) // 10  , 9, undefined , 0

//                    1º array  2º array
const [, [, nota]] = [[, 8, 8],[9, 6, 8]] // [,[,nota]] = ignora o 1º elemento (que é o 1º array), vai pro 2º (2º array) e no 2º ignora o 1º elemento no indice 0 e pega o 2º no indice 1, que é o 6.
console.log(nota) // 6 