/*
O número primo é aquele que somente é divisível por ele mesmo e
pela unidade. Fazer um programa que leia um número inteiro positivo,
calcule e escreva se este é um número primo ou não.
*/
function verificarPrimo(numero) { 
    let contador = 0;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) contador = contador + 1;
    }

    if (contador === 0) return `${numero} é número primo`;
    else return `${numero} não é número primo`;
}

function verificarPrimo2(numero) { 
    let contador = 0;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) contador = contador + 1;
    }

    if (contador === 0) return `${numero} é número primo`;
    else return `${numero} não é número primo`;
}

function verificarPrimo3(numero) { 
    let contador = 0;

    for (let divisor = 2; divisor <= Math.trunc(numero/2); divisor++) {
        if (numero % divisor === 0) contador = contador + 1;
    }

    if (contador === 0) return `${numero} é número primo`;
    else return `${numero} não é número primo`;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));

    console.log(verificarPrimo(numero));
    console.log(verificarPrimo2(numero));
    console.log(verificarPrimo3(numero));

    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");