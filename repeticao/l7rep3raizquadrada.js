/*
Fazer um programa para entrar com 100 números inteiros e
imprimir a raiz quadrada de cada um dos números lidos.
*/
function imprimirRaizQuadrada() {
    const limite = 100;

    for (let contador = 1; contador <= limite; contador++) {
        const numero = Number(prompt("Número: "));
        const raizQuadrada = Math.sqrt(numero);
        console.log(raizQuadrada.toFixed(2));
    }
    
}

// Entrada de dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirRaizQuadrada();

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");