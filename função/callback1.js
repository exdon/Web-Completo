const fabricantes  = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach()(para cada) elemento do array(fabricantes), ele imprime a função (imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
}) // aqui passa uma função no forEach() que vai imprimir cada elemento dentro do array (fabricantes)

fabricantes.forEach(fabricante => console.log(fabricante)) // numa arrow function 


// Para cada elemento do array(evento), ele chama um callback 

