/*
Criar um algoritmo que imprima os N primeiros termos da série de
Fibonacci.
Observação: os dois primeiros termos desta série são 1 e 1 e os
demais são gera- dos a partir da soma dos anteriores. Exemplos:
● 1 + 1 -> 2 terceiro termo;
● m 1 + 2-> 3 quarto termo etc.
*/
function obterNumeroTriangular(numero) {
    let saida   = "";
    let produto = 1;
    let i       = 1;

    while (produto <= numero) {
        produto = produto * i;
        if (produto === numero) return "Número Triangular";
        i++;
    }

    return "Número não Triangular";
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    const resposta = obterNumeroTriangular(numero);
    console.log(resposta)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");