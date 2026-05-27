/*
Fazer um programa para entrar com 10 números inteiros e
imprimir a metade de cada um dos números lidos.
*/
function imprimirMetade() {
    const limite = 10;
    
    for (let contador = 1; contador <= limite; contador++) {
        const numero = Number(prompt("Número: "));
        const metade = (numero / 2).toFixed(2);
        console.log(metade);
    }
}

// Entrada de dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    imprimirMetade();
    
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");