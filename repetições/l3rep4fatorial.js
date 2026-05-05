/*
Fazer um programa que leia um número inteiro positivo, calcule e
escreva o fatorial deste.
Exemplo: o fatorial de 5 é 5! = 5 * 4 * 3 * 2 * 1, o fatorial de zero é um
por definição, 0! = 1.
*/
function calcularFatorial(numero) { 
    let i = 1;
    let fatorial = 1;

    if (numero === 0) return 1; // // 0! = 1 por definição. Redundante já que o código abaixo também retornaria 1 para numero = 0.

    while (i <= numero) {
        fatorial = fatorial * i;
        i = i + 1;
    }
    
    return fatorial;
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    const resposta = calcularFatorial(numero);
    console.log(`Fatorial: ${resposta}`)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");