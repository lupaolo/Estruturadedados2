function criarMatriz(linhas, colunas) {
    var matriz = [];

    // Preencher a matriz com a soma dos índices
    for (var i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (var j = 0; j < colunas; j++) {
            matriz[i][j] = i + j + 2; // Soma dos índices mais 2
        }
    }

    return matriz;
}

// Função para solicitar a quantidade de linhas e colunas ao usuário
function solicitarDimensoes() {
    var linhas = parseInt(prompt("Digite a quantidade de linhas da matriz:"));
    var colunas = parseInt(prompt("Digite a quantidade de colunas da matriz:"));
    return [linhas, colunas];
}

// Função para exibir a matriz na página HTML
function exibirMatriz(matriz) {
    document.write("<h2>Matriz com Soma dos Índices</h2>");
    document.write("<table border='1'>");
    for (var i = 0; i < matriz.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz[i].length; j++) {
            document.write("<td>" + matriz[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

// Pedir a quantidade de linhas e colunas ao usuário
var dimensoes = solicitarDimensoes();
var linhas = dimensoes[0];
var colunas = dimensoes[1];

// Criar e preencher a matriz com a soma dos índices
var matriz = criarMatriz(linhas, colunas);

// Exibir a matriz na página HTML
exibirMatriz(matriz);