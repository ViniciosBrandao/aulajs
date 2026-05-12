/*
Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o máximo
divisor comum.
Obs.: utilizar o método das divisões sucessivas.
*/
function calcularMdc(numero1, numero2) {
    let divisor = 2;
    let mdc = 1;

    while (numero1 !== 1 && numero2 !== 1) {
        while (numero1 % divisor === 0 && numero2 % divisor === 0) {
            mdc = mdc * divisor;
            numero1 = numero1 / divisor;
            numero2 = numero2 / divisor;
        }
        
        if (numero1 % divisor === 0 || numero2 % divisor === 0) {
            if (numero1 % divisor === 0) numero1 = numero1 / divisor;
            if (numero2 % divisor === 0) numero2 = numero2 / divisor;
        } else divisor++
    }
    return mdc
}

const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero1 = Number(prompt("Número 1: "));
    const numero2 = Number(prompt("Número 2: "));

    const resposta = calcularMdc(numero1, numero2);
    console.log(resposta)

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");