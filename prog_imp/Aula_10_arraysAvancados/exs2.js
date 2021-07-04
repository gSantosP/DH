// microdesafios
//2 - Crie um array de nomes,
//que possua dois índices com o nome Maria.
//Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
var nomes = ["Maria", "João", "José", "Maria"]
let M = nomes.filter(function(nomes){
    return nomes == "Maria"
})
console.log(M)