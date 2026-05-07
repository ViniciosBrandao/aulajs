/*
Criar um algoritmo que imprima os N primeiros termos da série de
Fibonacci.
Observação: os dois primeiros termos desta série são 1 e 1 e os
demais são gera- dos a partir da soma dos anteriores. Exemplos:
● 1 + 1 -> 2 terceiro termo;
● m 1 + 2-> 3 quarto termo etc.
*/
function obterFibonacci(numero) {
    let saida    = "1, 1, ";
    let anterior = 1;
    let proximo  = 1;
    let contador = 2;

    if (numero <= 0) return "";
    if (numero === 1) return "1"; 

    while (contador < numero) {
        const temp = proximo; // Guarda valor para ser utilizado como anterior
        proximo = proximo + anterior;  
        saida += `${proximo}, `;      
        anterior = temp;
        contador++;
    }

    return saida
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numeroTermos = Number(prompt("Número de termos: "));
    const resposta = obterFibonacci(numeroTermos);
    console.log(resposta)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");