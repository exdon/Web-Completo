const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJs(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,  // não trazer para o arquivo final os comentários.
            presets: ["env"] // vai pegar a versão do js mais atual
        })) // vai converter o código para uma versão mais nova possivel e retirar os comentários
        .pipe(uglify()) // vai minificar o código (colocar tudo numa linha só, sem espaços e tals...)
        .on('error', err => console.log(err)) //dando um erro até esse ponto, retorne o erro
        .pipe(concat('codigo.min.js')) // concatena o resultado e gera o arquivo 'codigo.min.js'
        .pipe(gulp.dest('bild')) // pasta onde o arquivo final irá ficar.

    return callback()
}

exports.default = series(transformacaoJs)