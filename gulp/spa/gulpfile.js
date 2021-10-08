const { series , parallel } = require('gulp')
const gulp = require('gulp')

const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app') // importando de app as funções {}
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitarArquivos
)


