function encontrarIndices(vetor, numero) {
    var indices = [];
    // Percorre o vetor
    for (var i = 0; i < vetor.length; i++) {
        // Se encontrar o número, adiciona o índice ao array de índices
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    // Verifica se o número foi encontrado
    if (indices.length === 0) {
        console.log("O número " + numero + " não foi encontrado no vetor.");
    } else {
        console.log("O número " + numero + " foi encontrado nos seguintes índices: " + indices.join(", "));
    }
}


var vetorExemplo = [1, 3, 2, 3, 4, 3, 5];
var numeroProcurado = 3;
encontrarIndices(vetorExemplo, numeroProcurado);
