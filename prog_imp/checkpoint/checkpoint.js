const readline = require('readline-sync')
// Olá, você foi contratado para executar este projeto.
// É importante que você analise, entenda o pedido do 
//cliente e desenvolva conforme solicitado.
// Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz,
// onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// 1- O usuário poderá alterar o tempo padrão,
// aumentando ou diminuindo de acordo com sua vontade.
// Se o tempo informado for maior que 2x o necessário,
// exibir mensagem que a comida queimou.


// 2- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 


// 3- Opções não listadas no menu,
// devem exibir uma mensagem de erro: "Prato inexistente";


// 4- Se o tempo for 3x maior que o necessário para o prato,
// o microondas deve exibir a mensagem: “kabumm”;


// 5- No final de cada tarefa, o microondas deverá exibir a mensagem:
// "Prato pronto, bom apetite!!!".

// inicio do código!
console.log("=" * 30)
console.log("Olá! Seja bem vindo ao microondas mais rapido do mundo!")
console.log("Digite uma opcao de [1] a [5], ou [6] para sair")
console.log("=" * 30)
// opcoes
console.log("1- pipoca (normalmente leva 10 segundos)")
console.log("2- macarrão (normalmente leva 8 segundos)")
console.log("3- carne (normalmente leva 15 segundos)")
console.log("4- feijão (normalmente leva 12 segundos)")
console.log("5- brigadeiro (normalmente leva 8 segundos)")
console.log("6- Sair")
var opcao = readline.questionInt("Opcao:")
var tempo = readline.questionInt("Tempo")
if (opcao == 1) {
    console.log("Voce escolheu a opcao 1")
    switch (tempo) {
        case 20:
            console.log("A comida queimou!")
            break;
        case 9:
            console.log("Tempo insuficiente")
        break;
        case 30:
        console.log("kabumm")
    
        default:
            console.log("Prato pronto, bom apetite!!!")
            break;
    }
}
if (opcao == 2) {
    console.log("Voce escolheu a opcao 2")
    switch (tempo) {
        case 16:
            console.log("A comida queimou!")
            break;
        case 8:
            console.log("Tempo insuficiente")
        break;
        case 24:
        console.log("kabumm")
    
        default:
            console.log("Prato pronto, bom apetite!!!")
            break;
    }
    
}
if (opcao == 3) {
    console.log("Voce escolheu a opcao 3")
    switch (tempo) {
        case 30:
            console.log("A comida queimou!")
            break;
        case 29:
            console.log("Tempo insuficiente")
        break;
        case 45:
        console.log("kabumm")
    
        default:
            console.log("Prato pronto, bom apetite!!!")
            break;
    }
    
}
if (opcao == 4) {
    console.log("Voce escolheu a opcao 4")
    switch (tempo) {
        case 24:
            console.log("A comida queimou!")
            break;
        case 23:
            console.log("Tempo insuficiente")
        break;
        case 36:
        console.log("kabumm")
    
        default:
            console.log("Prato pronto, bom apetite!!!")
            break;
    }
    
}
if (opcao == 5) {
    console.log("Voce escolheu a opcao 5")
    switch (tempo) {
        case 16:
            console.log("A comida queimou!")
            break;
        case 8:
            console.log("Tempo insuficiente")
        break;
        case 24:
        console.log("kabumm")
    
        default:
            console.log("Prato pronto, bom apetite!!!")
            break;
    }
    
}
if (opcao == 6) {
    
}
if (opcao <= 0 && opcao >= 6) {
    console.log("prato inexistente")
    
}

