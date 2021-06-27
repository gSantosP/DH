// microdesafios
// Exercício “Importações”
var calculadora = {
    soma: function(n1, n2){
        return console.log(n1 + n2)
    },
    subt: function(n1, n2){
        return(console.log(n1 - n2))
    },
    mult: function(n1, n2){
        return(console.log(n1 * n2))
    },
    divi: function(n1, n2){
        return(console.log(n1 / n2))
    }
}
module.exports = calculadora;
