// microdesafios
// 1- Crie um array de números pares,
// e utilizando a função .map() nesse array,
// crie um novo array com apenas números ímpares.
var pares = [2, 4, 6, 8, 10]
let impares = pares.map(function(num){
    return num - 1
});

console.log(impares)