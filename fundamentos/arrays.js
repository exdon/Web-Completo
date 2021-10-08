const valores = [7.7, 8.9, 6.3, 9.2] // uso a ',' para separar itens (posições)
console.log(valores[0], valores[3]) // resultado = 7.7  9.2
console.log(valores[4]) // resultado = undefined

valores[4] = 10
console.log(valores) // resultado = [7.7, 8.9, 6.3, 9.2, 10]

valores[10] = 10
console.log(valores) //resultado = resultado = [7.7, 8.9, 6.3, 9.2, <1 empty item>, 10]
console.log(valores.length) // tamanho da lista  resultado = 5

valores.push({id: 3}, false, null, 'teste') // push adiciona itens no array
console.log(valores) // resultado = [7.7, 8.9, 6.3, 9.2, 10, { id:3 }, false, null, 'teste' ]
console.log(valores.pop()) //pop() ele remove o ultimo item do array  resutado = teste
delete valores[0] // remove o item no array valores na posição [0] que é o 7.7
console.log(valores) // resultado = [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id:3 }, false, null]

console.log(typeof valores) // resultado = object
