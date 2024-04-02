function fibonacci(n) {
    var fibArray = [];
    var a = 0, b = 1, temp;
    for (var i = 0; i < n; i++) {
        fibArray.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }
    return fibArray;
}

// Função para solicitar um número inteiro positivo ao usuário
function solicitarNumero() {
    var numero = parseInt(prompt("Digite um número inteiro positivo para gerar os números de Fibonacci:"));
    return numero;
}

// Função para exibir o resultado na página HTML
function exibirResultado(fibArray) {
    document.write("Números de Fibonacci gerados: " + fibArray.join(", "));
}

// Pedir um número inteiro positivo ao usuário
var n = solicitarNumero();

// Gerar os números de Fibonacci até o n-ésimo termo
var fibSequence = fibonacci(n);

// Exibir o resultado na página HTML
exibirResultado(fibSequence);