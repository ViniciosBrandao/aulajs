/*
Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o mínimo múltiplo comum.
*/
function calcularMmc(numero1, numero2) {
    let a = numero1;
    let b = numero2;

    while (b !== 0) {
        const resto = a % b;

        a = b; // atualiza os valores para próxima divisão
        b = resto;
    }

    return (numero1 * numero2) / a; // pelo algoritmo de Euclides o MMC é numero1 x numero2 / MDC
}

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));
  
    const resposta = calcularMmc(numero1, numero2);
    console.log(`MMC(${numero1}, ${numero2}) = ${resposta}`)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");