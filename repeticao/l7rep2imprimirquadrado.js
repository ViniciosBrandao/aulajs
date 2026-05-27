/*
Fazer um programa para entrar com 15 números inteiros e
imprimir o quadrado de cada um dos números lidos.
*/
function imprimirQuadrado() {
    const limite = 15;
    
    for (let contador = 1; contador <= limite; contador++) {
        const numero = Number(prompt("Número: "));
        const numeroQuadrado = (numero ** 2);
        console.log(numeroQuadrado);
    }

}

// Entrada de dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const resposta = imprimirQuadrado();

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");