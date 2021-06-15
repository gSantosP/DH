//microdesafio "Lista de compras"
var minhasCompras = ["Frango", "Batata Doce"].
// metodo join(), une todos os indices do array e transforma em uma string
console.log(minhasCompras.join())
// metodo pop(), remove o primeiro indice, no caso o "Frango"
console.log(minhasCompras.pop())
// metodo push(), insere o valor passado como parametro no final do array, e retorna
// seu comprimento
console.log(minhasCompras.push("ovo"))
// metodo shift(), remove o ultimo indice, no caso "Batata Doce"
console.log(minhasCompras.shift())
// metodo unshift(), insere os valores no começo do array, e retorna seu comprimento
console.log(minhasCompras.unshift("Arroz", "Feijão", "Salada"))
minhasCompras.toUpperCase(minhasCompras)
console.log(minhasCompras.toUpperCase())