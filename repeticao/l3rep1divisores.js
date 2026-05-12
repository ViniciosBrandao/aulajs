/*
O número primo é aquele que somente é divisível por ele mesmo e
pela unidade. Fazer um programa que leia um número inteiro positivo,
calcule e escreva se este é um número primo ou não.
*/
function mostrarDivisores(numero) { 
    let saida = "";
    for (let divisor = 1; divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            saida += `${divisor} \n`;
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
    console.log(mostrarDivisores(numero));
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");