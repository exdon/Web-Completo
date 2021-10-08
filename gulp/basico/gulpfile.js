const gulp = require('gulp') //importando o gulp
const { series,parallel } = require('gulp') //dentro do gulp, importando o series e parallel 
// series -- usado para fazer varias tasks em serie, uma depois da outra.
// parallel -- em paralelo
// pode ser feito assim tbm: const series = gulp.series


const antes1 = callback => {
    console.log("Antes 1")
    return callback()
}

const antes2 = callback => {
    console.log("Antes 2")
    return callback()
}


function copiar(callback){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) 
    //gulp.src('pastaA/**/*.txt') // pegue qualquer arquivo que esteja na pastaA e tenha como extensão txt.
        .pipe(gulp.dest('pastaB')) // serve para fazer transformações em arquivos definidos no src -- no caso ele vai jogar os arquvios em uma pasta destino 'pastaB *caso a pasta não exista, ele cria.'
    return callback()
}


const fim = callback => {
    console.log("Fim")
    return callback()
}

module.exports.default = series(  // exporta a função copiar para ser executada -- default precisa existir para o gulp localizar o arquivo.
    parallel(antes1, antes2),
    copiar,
    fim
    ) 
