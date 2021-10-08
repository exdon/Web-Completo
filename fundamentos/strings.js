const escola = 'cod3r'

console.log(escola.charAt(4)) // va mostrar a letra no indice 4   resultado = r
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) //retorna o código relacionado a tabela unicode 
console.log(escola.indexOf('d')) //retorna em que indice a letra escolhida está  resultado = 'd' está em 2
console.log(escola.substring(1)) //ele vai a partir do indice 1 até o fim  resultado = od3r
console.log(escola.substring(0,3)) //ele vai do indice 0 até o indice , porém sem imprimir o indice 3   resultado = cod
console.log('Escola'.concat(escola).concat("!")) //ele va concatenar a palavra "Escola" com o item dentro de escola ("cod3r") e ("!").  resultado = Escola cod3r !
console.log('Escola' + escola + '!') // faz o mesmo que o de cima, ele concatena  resultado = Escola cod3r !
console.log(escola.replace(3, "e")) // substituí o item no indice "3", pela palavra escolhida, no caso "e"  resultado = coder
console.log(escola.replace(/\d/, "e")) //substituí todos os digitos no texto, pela palavra "e"  resultado = coder
console.log(escola.replace(/\w/,"e")) //substituí a primeira letra por "e"  resultado = eod3r
console.log(escola.replace(/\w/g, "e")) //substituí todas as letras no texto pela palavra "e"  resultado = eeeee
console.log('Ana, Maria, Pedro'.split(',')) //cria uma array com os elementos("Ana Maria Pedro"), separados por uma virgula  resultado = ['Ana', 'Maria', 'Pedro']



