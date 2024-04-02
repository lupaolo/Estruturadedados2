function ordenarArray(array) {
    // Verifica se o primeiro número é maior que o segundo
    if (array[0] > array[1]) {
        // Se for, troca os elementos de posição
        let temp = array[0];
        array[0] = array[1];
        array[1] = temp;
    }
    // Retorna o array ordenado
    return array;
}

const arrayOriginal = [5, 2];
const arrayOrdenado = ordenarArray(arrayOriginal);
console.log(arrayOrdenado); // Saída: [2, 5]
