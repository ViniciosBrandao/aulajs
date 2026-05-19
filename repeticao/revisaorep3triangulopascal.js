/*
Triângulo de Pascal (sem array)
linha 0:     1
linha 1:    1 1
linha 2:   1 2 1
linha 3:  1 3 3 1
linha 4: 1 4 6 4 1
dica: cada elemento é C(linha, coluna) = linha! / (coluna! × (linha-coluna)!)  — use fatorial
*/
function imprimirTrianguloPascal(limite) {
    let saida = "";

    for (let linha = 0; linha <= limite; linha++) {
        for (let coluna = 0; coluna <= (linha); coluna++) {
            const elemento = calcularFatorial(linha) / (calcularFatorial(coluna) * (calcularFatorial(linha - coluna)));
            saida = saida + ` ${elemento}`;
        }
        saida = saida + "\n";
    }

    return saida;
}
function calcularFatorial(numero) { 
    let fatorial = 1;
    let aux      = numero;

    if (numero === 0) return 1; // 0! = 1 por definição. Redundante já que o código abaixo também retornaria 1 para numero = 0.

    while (aux >= 1) {
        fatorial = fatorial * aux;
        aux = aux - 1;
    }

    return fatorial;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const linha = Number(prompt("Imprimir até qual linha: "));
    const resposta = imprimirTrianguloPascal(linha);
    console.log(resposta);

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");
