const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec ()  // Global  
//ele retorna não o local de execução mas sim onde ela foi definida.