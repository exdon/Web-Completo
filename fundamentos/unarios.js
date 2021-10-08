let num1 = 1
let num2 = 2

num1++

console.log(num1) // 2
--num1
console.log(num1) // 1 

console.log(++num1 === num2--) // true pq primeiro ele compara o ++num1 com o num2, pra depois fazer o --, conforme proximo log.
console.log(num1 === num2) // false 