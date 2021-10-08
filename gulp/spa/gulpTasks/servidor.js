const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series('appHTML')()) //Toda vez que alterar algo no arquivo html, automaticamente ele gerará novos arquivos com a alteração
    watch('src/**/*.scss', () => gulp.series('appCSS')()) //Toda vez que alterar algo no arquivo css, automaticamente ele gerará novos arquivos com a alteração
    watch('src/**/*.js', () => gulp.series('appJS')()) //Toda vez que alterar algo no arquivo js, automaticamente ele gerará novos arquivos com a alteração
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')()) //Toda vez que alterar algo no arquivo de imagens, automaticamente ele gerará novos arquivos com a alteração
    return callback()
}


function servidor(callback) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, //se quiser que ele abra o browser
            livereload: true,
        }))
}

module.exports = {
    monitarArquivos,
    servidor
}