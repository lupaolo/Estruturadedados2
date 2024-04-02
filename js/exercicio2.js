function ordenarArray(array) {
    // Verifica se o array tem exatamente 3 elementos
    if (array.length !== 3) {
        return "O array deve conter exatamente 3 números.";
    }

    // Ordena o array em ordem crescente
    array.sort(function(a, b) {
        return a - b;
    });

    return array;
}


var numeros = [3, 1, 2];
console.log("Array original:", numeros);
console.log("Array ordenado:", ordenarArray(numeros));
