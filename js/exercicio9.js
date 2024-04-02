// Implementação de uma pilha
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

// Função principal para ler os números e manipular a pilha
function manipularPilha() {
    var pilha = new Pilha();

    // Loop para ler 10 números
    for (var i = 0; i < 10; i++) {
        var numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));

        // Verificar se o número é par ou ímpar
        if (numero % 2 === 0) {
            pilha.empilhar(numero); // Empilhar números pares
        } else {
            if (pilha.estaVazia()) {
                console.log("A pilha está vazia, não é possível desempilhar.");
            } else {
                pilha.desempilhar(); // Desempilhar um número ímpar, se a pilha não estiver vazia
            }
        }
    }

    // Verificar se a pilha ainda contém elementos
    if (!pilha.estaVazia()) {
        console.log("Elementos restantes na pilha:");
        while (!pilha.estaVazia()) {
            console.log(pilha.desempilhar());
        }
    }
}

// Chamada da função principal
manipularPilha();