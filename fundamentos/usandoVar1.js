{
    {
        {
            { 
                var sera = 'Será???' 
            }
        }
    }
}
console.log(sera) // será é uma variavel global

function teste(){
    var local = 123
    console.log(local) 
}

teste()
console.log(local) //local is not defined  pois local esta dentro da function, não sendo uma variavel global.

