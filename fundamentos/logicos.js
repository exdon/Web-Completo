function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (ou exclusivo = só será true se ambos fores diferentes, se forem igual é false)
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete //!comprarSorvete operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true)) //{comprarSorvete: true,comprarTv50: true,comprarTv32: false,manterSaudavel: false}
console.log(compras(true,false)) //{comprarSorvete: true,comprarTv50: false,comprarTv32: true,manterSaudavel: false}
console.log(compras(false,true)) //{comprarSorvete: true,comprarTv50: false,comprarTv32: true,manterSaudavel: false}
console.log(compras(false,false)) //{comprarSorvete: false,comprarTv50: false,comprarTv32: false,manterSaudavel: true}