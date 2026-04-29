/*
Fazer um programa que leia um número inteiro positivo, calcule e
escreva todos os divisores deste.
*/
function calcularDivisores(numero) { 
    let saida = "";
    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0) {
            saida += `${i} \n`;
        }
    }
    return saida;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    console.log(calcularDivisores(numero));
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");