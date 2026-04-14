/*
Dados quatro números distintos, desenvolver um programa que
determine e imprima a soma dos três menores.
*/
function somar3Menores(numero1, numero2, numero3, numero4) {
    if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4) {
        return numero2 + numero3 + numero4;
    } else if (numero2 > numero3 && numero2 > numero4) {
        return numero1 + numero3 + numero4;
        } else if (numero3 > numero4) {
            return numero1 + numero2 + numero4;
            } else return numero1 + numero2 + numero3;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

// Processamento e Saída da Informação
let opcao = "";
do{
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));
    const numero3 = Number(prompt("Número 3: "));
    const numero4 = Number(prompt("Número 4: "));
    const resposta = somar3Menores(numero1, numero2, numero3, numero4);
    console.log(`A soma dos três menores é: ${resposta}`);
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");
