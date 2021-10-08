const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    body: '#25b6da',
    padrao: '#25b6da',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() // pega o nome do elemento. ex p, div, form...

    elemento.getElementsByClassName.borderColor = colors.get(tagName) // aplica uma cor em cima da borda desse elemento

    if (!elemento.classList.contains('nolabel')) { // se ele não estiver marcado como 'nolabel'...
        const label = document.createElement('label') // adiciona dentro dessa const um elemento label...
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) // antes de um elemento filho presente.
    }
})