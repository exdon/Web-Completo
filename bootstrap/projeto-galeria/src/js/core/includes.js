import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body' // se o parametro parent vier vazio, o parent será o body
    // dentro do parent "$(parent)" encontre "find" todos os atributos '[wm-include]' e para cada "each" faça...
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include') //encontre o atributo "attr" dentro do elemento "$(e)"
        $.ajax({
            url,
            success(data) { // se a função for bem sucedida
                $(e).html(data) //pega o elemento atual e seta os dados "data" dentro do html
                $(e).removeAttr('wm-include') //removendo evita com que esse attr seja processado uma 2ª vez

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e) //função recursiva para pegar todos os includes dentro da página
            }
        })
    })
}

loadIncludes()