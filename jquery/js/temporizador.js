(function ($) {
    $.fn.temporizador = function (opcoes) {
        const opcoesFinais = $.extend({
            mensagem: 'Em breve!', //se não tivesse passado essa info no plugin2.html, ele usuaria esse valor por padrão
            horario: '23:59:59'  //se não tivesse passado essa info no plugin2.html, ele usuaria esse valor por padrão
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

            const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) //expressão para pegar os digitos da hora, minuto e segundo
            const horarioAlvo = regex.exec(opcoesFinais.horario)

            let temporizador = setInterval(() => {
                const agora = new Date()
                const alvo = new Date()
                alvo.setHours(horarioAlvo[1]) // pega a hora
                alvo.setMinutes(horarioAlvo[2]) // pega o minuto
                alvo.setSeconds(horarioAlvo[3]) // pega o segundo

                const diferencaEmMiliSeg = alvo.getTime() - agora.getTime()
                if (diferencaEmMiliSeg >= 0) {
                    const diferenca = regex.exec(new Date(diferencaEmMiliSeg).toISOString()) // toISOString para que não seja considerada a diferença de hora to timezone (-3) de um pais pro pro outro.    

                    horaDezena.html(diferenca[1][0]) // pega o 1º digito da hora
                    horaUnidade.html(diferenca[1][1]) // pega o 2º digito da hora
                    minutoDezena.html(diferenca[2][0]) // pega o 1º digito do minuto
                    minutoUnidade.html(diferenca[2][1]) // pega o 2º digito do minuto
                    segundoDezena.html(diferenca[3][0]) // pega o 1º digito do segundo
                    segundoUnidade.html(diferenca[3][1]) // pega o 2º digito do segundo
                } else {
                    clearInterval(temporizador)
                }
            }, 1000);

        return this
    }
})(jQuery)