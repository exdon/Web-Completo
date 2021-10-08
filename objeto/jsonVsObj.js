const obj = { a: 1 , b: 2 , c: 3 , soma() {return a+b+c} }
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}

//JSON É UM FORMATO TEXTUAL QUE PODE SER EXECUTADO EM QUALQUER LINGUAGEM. NÃO PODE TER FUNÇÕES DENTRO DELE.

//console.log(JSON.parse("{a:1, b: 2, c: 3}")) formato inválido
//console.log(JSON.parse("{'a':1, 'b':2, 'c': 3}")) formato inválido
console.log(JSON.parse('{"a":1, "b": 2, "c": 3}')) // { a: 1, b: 2, c: 3 } converte em JSON em obj formato válido
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d": {}, "e": []}')) // { a: 1, b: 'string', c: true, d: {}, e: [] }
// atributos e textos devem estar delimitados com aspas duplas "" e abri com aspas simples''


