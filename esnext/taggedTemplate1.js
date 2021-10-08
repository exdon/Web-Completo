// tagged templates - processa o template string dentro de uma função.
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}`)
/* [ '', ' está ', '' ] primeiro ele retorna um array de partes ('',está,'')
[ 'Gui', 'Aprovado' ] depois retorna um array de valores ('Gui', 'Aprovado')
Outra String */ // depois ele gera uma string que esta contida na função e não no template string.
