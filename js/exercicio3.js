function pedirNumeros() {
    var numeros = []; // Array para armazenar os números

    // Pedir os números ao usuário
    for (var i = 0; i < 3; i++) {
        var numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero); // Adicionar o número ao array
    }

    return numeros; // Retornar o array com os números
}

// Função para inverter a sequência dos números no array
function inverterSequencia(array) {
    return array.reverse(); // Inverte a sequência do array
}

// Função para exibir o array na página
function exibirArray(array) {
    document.write("Sequência Original: " + array.join(", ") + "<br>"); // Exibe a sequência original
}

// Pedir os números ao usuário
var numerosUsuario = pedirNumeros();

// Exibir a sequência original
exibirArray(numerosUsuario);

// Inverter a sequência
var sequenciaInvertida = inverterSequencia(numerosUsuario);

// Exibir a sequência invertida
document.write("Sequência Invertida: " + sequenciaInvertida.join(", "));