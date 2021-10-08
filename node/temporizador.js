const schedule = require('node-schedule') // importando o node-schedule
const { set } = require('lodash')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function() { // o que colocar dentro da função ele vai exec conforme escolha ().
    console.log('Executando Tarefa 1 !', new Date().getSeconds()) // new Date().getSeconds() pra mostrar os segundos.
}) /* executar de 5 em 5 segundos (/5) em qualquer minuto(*) 12 horas (12) 
ignoro o dia do mes(*) ignoro o proprio mes (*) e executar na terça-feira(2) (0-domingo,1-segunda,2-terça,3-quarta...6-sabado) */

setTimeout(function () {
    tarefa1.cancel() // forma de cancelar um temporizador a partir do scheduleJob    
    console.log('Cancelando Tarefa 1!')
}, 20000) // setTimeOut, temporizador. 20000  = vai cancelar depois de 20 seg.

//setImmediate disparar de forma imediata, sem definir um tempo.
//setInterval disparar uma função de tempos em tempos.

const regra = new schedule.RecurrenceRule() // RecurrenceRule = especifica quando algo deve se repetir.
regra.dayOfWeek = [new schedule.Range(1, 5)] // executar de segunda a sexta 
regra.hour = 12 // na hora 12
regra.second = 30 // a cada 30 segundos.

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2 !', new Date().getSeconds())
})