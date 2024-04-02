function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        var fatorial = 1;
        for (var i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

// Função para solicitar um número inteiro positivo ao usuário
function solicitarNumero() {
    var numero = parseInt(prompt("Digite um número inteiro positivo para calcular o fatorial:"));
    return numero;
}

// Função para exibir o resultado na página HTML
function exibirResultado(fatorialArray) {
    for (var i = 0; i < fatorialArray.length; i++) {
        document.write("Fatorial de " + i + ": " + i + "! = " + fatorialArray[i] + "<br>");
    }
}

// Pedir um número inteiro positivo ao usuário
var n = solicitarNumero();

// Calcular os fatoriais até o número fornecido pelo usuário
var fatoriais = [];
for (var j = 0; j <= n; j++) {
    fatoriais.push(calcularFatorial(j));
}

// Exibir o resultado na página HTML
exibirResultado(fatoriais);