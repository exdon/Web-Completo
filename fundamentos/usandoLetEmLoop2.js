const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    }) //adiciona elemento no array

}

funcs[2]() //2
funcs[8]() //8
