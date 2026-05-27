/*
Fazer um programa para ler 20 números inteiros e imprimir
para cada um destes números se ele é par ou ímpar.
*/
function imprimirParOuImpar() {
    const limite = 20;

    for (let contador = 1; contador <= limite; contador++) {
        const numero = Number(prompt("Número: "));

        if (numero % 2 === 0) {
            console.log("É par");
        } else {
            console.log("É ímpar");
        }
    }
}

// Entrada de dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    imprimirParOuImpar();

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");