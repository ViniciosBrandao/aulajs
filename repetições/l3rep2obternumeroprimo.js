/*
O número primo é aquele que somente é divisível por ele mesmo e
pela unidade. Fazer um programa que leia um número inteiro positivo,
calcule e escreva se este é um número primo ou não.
*/
function verificarNumeroPrimo(numero) { 
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "não é primo"
        } 
    }
    
    if (numero === 1) return "não é primo"
    return "é primo"
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    const resposta = verificarNumeroPrimo(numero);
    console.log(`O número ${numero} ${resposta}.`)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");