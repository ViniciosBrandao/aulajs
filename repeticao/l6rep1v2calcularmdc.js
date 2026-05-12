/*
Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o máximo
divisor comum.
Obs.: utilizar o método das divisões sucessivas.
*/
function calcularMdc(numero1, numero2) {
    while (numero2 !== 0) {
        const resto = numero1 % numero2;
        numero1 = numero2;  // garente que o numero1 seja o maior
        numero2 = resto;   // divide o maior pelo menor até chegar no resto 0
    }

    return numero1;       // pelo algoritmo de Euclides o MDC é o dividendo quando o resto chega a 0
}

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));
  
    const resposta = calcularMdc(numero1, numero2);
    console.log(`MDC(${numero1}, ${numero2}) = ${resposta}`)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");