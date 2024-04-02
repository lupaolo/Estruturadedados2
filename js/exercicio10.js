class Pilha {
    constructor() {
        this.elementos = [];
    }

    // Método para empilhar um elemento
    empilhar(elemento) {
        this.elementos.push(elemento);
    }

    // Método para desempilhar um elemento
    desempilhar() {
        return this.elementos.pop();
    }

    // Método para verificar se a pilha está vazia
    estaVazia() {
        return this.elementos.length === 0;
    }
}

// Função principal para ler os números e manipular as pilhas
function manipularPilhas() {
    var pilhaPar = new Pilha();
    var pilhaImpar = new Pilha();

    // Loop para ler 10 números
    for (var i = 0; i < 10; i++) {
        var numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));

        // Verificar se o número é par, ímpar ou zero
        if (numero % 2 === 0) {
            pilhaPar.empilhar(numero); // Empilhar números pares
        } else {
            pilhaImpar.empilhar(numero); // Empilhar números ímpares
        }

        // Verificar se o número é zero
        if (numero === 0) {
            // Desempilhar um elemento de cada pilha
            if (pilhaPar.estaVazia() || pilhaImpar.estaVazia()) {
                console.log("Erro: Alguma das pilhas está vazia.");
            } else {
                pilhaPar.desempilhar();
                pilhaImpar.desempilhar();
            }
        }
    }

    // Desempilhar todos os elementos das pilhas e imprimir na tela
    console.log("Elementos da pilha par:");
    while (!pilhaPar.estaVazia()) {
        console.log(pilhaPar.desempilhar());
    }

    console.log("Elementos da pilha ímpar:");
    while (!pilhaImpar.estaVazia()) {
        console.log(pilhaImpar.desempilhar());
    }
}

// Chamada da função principal
manipularPilhas();