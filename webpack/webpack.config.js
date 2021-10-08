const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js', //nome do arquivo gerado na pasta dist
        path: __dirname + '/public' //manda o arquivo para uma pasta chamada public ao invez de dist.
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization : {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "estilo.css"
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/, //expressão que le os arquivos com extensões css, scss e sass
            use: [
                miniCssExtractPlugin.loader, // adiciona css a dom injetando a tag <style>
                //'style-loader', // adiciona css a dom injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}


// se rodar no terminal 'npm start', ele gerará os arquivos* no modo development

// se eu rodar no terminal 'npm run build', ele gerará os arquivos* no modo production (minimizados)

// *no caso os arquivos principal.js e estilo.css na pasta public