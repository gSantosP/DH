// Exercicio "Terceirizando funcoes"

var acaocarro = (executafuncao) => executafuncao()
var andar =_=> console.log("O carro está andando") 
var parar =_=> console.log("O carro parou")
acaocarro(andar)
acaocarro(parar)