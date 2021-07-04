// microdesafios
//3 - Crie um array de números e utilize a função
// .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let str = numeros.reduce(" - ")
console.log(numeros)