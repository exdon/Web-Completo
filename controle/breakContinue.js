const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
} // break, ele interrompe a execução chegando na condição do if.
 // 0=1, 1=2, 2=3, 3=4, 4=5 e para. 

for(y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
} // continue, ele pula o indice condicionado no if e depois continua.
 // 0=1, 1=2, 2=3, 3=4, 4=5, pula e continua 6=7, 7=8, 8=9, 9=10


 externo: for (a in  nums) {
     for (b in nums) {
         if(a == 2 && b == 3) break externo
         console.log(`Par = ${a}, ${b}`)
     }
 } // ele vai formar pares de indices
   // Par = 0, 0, Par = 0, 1, Par = 0, 2, Par = 0, 3, Par = 0, 4....Par = 1, 0, Par = 1, 1, Par = 1, 2...Par = 1, 9, Par = 2, 0, Par = 2, 1, Par = 2, 2

 console.log('Fim!')

