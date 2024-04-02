// Função para converter um número decimal em hexadecimal
function decimalParaHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

// Função para converter e exibir o resultado na página HTML
function converterParaHexadecimal() {
    var decimalInput = document.getElementById("decimal");
    var decimal = parseInt(decimalInput.value);

    // Verificar se a entrada é um número
    if (isNaN(decimal)) {
        document.getElementById("resultado").textContent = "Por favor, digite um número válido.";
        return;
    }

    var hexadecimal = decimalParaHexadecimal(decimal);
    document.getElementById("resultado").textContent = "O número decimal " + decimal + " é equivalente a " + hexadecimal + " em hexadecimal.";
}