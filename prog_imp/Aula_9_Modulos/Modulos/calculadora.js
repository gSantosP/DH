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
// var soma = (n1, n2)=> console.log(n1 + n2)
// module.exports = soma
// var subt = (n1, n2)=> console.log(n1 - n2)
// module.exports = subt
// var mult = (n1, n2)=> console.log(n1 * n2)
// module.exports = mult
// var divi = (n1, n2)=> console.log(n1 / n2)
// module.exports = divi

// frutas = ["banana", "maça"]
// module.exports = frutas