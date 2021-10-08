console.log('01)', '1' == 1) // 01) true ('1' é ==(igual) a 1?)
console.log('02)', '1' === 1) // 02) false ('1' é === (istritamente igual) a 1?)
console.log('03)', '3' != 3) // 03) false ('3' é != (diferente) de 3?)
console.log('04)', '3' !== 3) // 04) true ('3' é !== (istritamente diferente) de 3?)

console.log('05)', 3 < 2) // 05) false
console.log('06)', 3 > 2) // 06) true
console.log('07)', 3 <= 2) // 07) false
console.log('08)' , 3>= 2) // 08) true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // 09) false
console.log('10)',d1 == d2) // 10) false
console.log('11)', d1.getTime() === d2.getTime()) // 11) true
console.log('12)', d1.getTime() == d2.getTime()) // 12) true

console.log('13)', undefined == null) // 13) true
console.log('14)', undefined === null) // 14) false

