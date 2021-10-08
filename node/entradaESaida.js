/* obj process é possivel ler dados do teclado do usuario, tambem imprimir tanto na entrada padrão (teclado)
 e saida padrão (tela) do computador. */

const { wrap } = require("module")

 const anonimo = process.argv.indexOf('-a') !== -1
 //console.log(anonimo)


// escrevendo no terminal node entradaESaida.js -a.. ele mostra a msg 'Fala Anônimo!'. Apenas se for -a, se for -b ou nada, ele não mostra.

 if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') //saida padrão stdout
    process.exit() // mata o processo. finaliza a aplicação
 } else{ // caso a flag anonima não seja digitada.
     process.stdout.write('Escreva o seu nome: ')
     process.stdin.on('data', data => { // process.stdin.on  pega o que foi digitado
        const nome = data.toString().replace('\n', '')// .replace('\n', '') remove o enter no final.

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit() // finaliza o processo.
     }) /* stdin entrada padrão. O evento on('data') vai existir quando vc digita algo e depois aperta o enter.
      Ele vai chamar uma função, passando aquilo que vc digitou dentro da varivel data e o enter (espaço)*/
 }

 
