function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
   // throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

} //lançar (throw) a msg ('...', 10, true ....(uma das opções do throw, todas são válidas, mas apenas uma deve ser usada)) como erro, caso dê erro.

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
} // ele tenta o cód. (try), caso dê erro, ele vai tratar (catch) e mesmo que dê erro ou não, ele executará no final, o finally.

const obj = { nome: 'Roberto' } //aqui ele vai dar erro, pq passei nome, onde na função foi definido como name
imprimirNomeGritado(obj)