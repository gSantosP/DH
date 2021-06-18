// microdesafios
// Transforme as seguintes funcoes em arrow functions
// ********************************** 
// function print(mensagem){
//     console.log(mensagem)
// }

// print("Olá, bom dia")
// **********************************
// function soma(n1, n2){
//     return n1 + n2
// }

// console.log(soma(10, 10))
var msg = mensagem => console.log(mensagem)
msg("Hello world!")

var soma = (n1, n2) => n1 + n2
msg(soma(50, 10))
