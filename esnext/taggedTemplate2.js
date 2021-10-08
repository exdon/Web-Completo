function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // se não for um valor numerico, retorne valor, mas se for, retorne ()
        resultado.push(partes[indice], valor) // concatenar as partes com valores 
    })
    return resultado.join('') // pega os resultados e gera uma string
}

const preco = 29.9
const precoParcela = 11
console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`) // 1x de R$29.90 ou 3x de R$11.00