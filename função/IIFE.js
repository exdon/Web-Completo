// IIFE = Immediately Invoked Function Expression 
// Pra fugir do escopo global

// Cria uma função anonima envolvida por ( )

(function() { 
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() 

// No final invoca (), tudo que estiver dentro, será invocado.