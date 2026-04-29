/*
Fazer um programa que leia um número inteiro positivo, calcule e
escreva se o número lido é um número perfeito ou não. Número
perfeito é aquele cuja soma de seus divisores, exceto ele próprio, é
igual ao número.
i. Exemplo: 6 é um número perfeito porque 1 + 2 + 3 = 6.
a. 8 não é um número perfeito porque 1 + 2 + 4 = 7
*/
function obterNumeroPerfeito(numero) { 
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            soma = soma + i;
        } 
    }
    
    if (soma === numero) return "é perfeito";
    return "não é perfeito";
}

// Entrada de Dados
const prompt = require("prompt-sync")();

let opcao = "";
// Processamento e Saída da Informação
do {
    const numero = Number(prompt("Número: "));
    const resposta = obterNumeroPerfeito(numero);
    console.log(`O número ${numero} ${resposta}.`)
    opcao = prompt("Deseja continuar? (S/N) ");
} while (opcao.toUpperCase() === "S");