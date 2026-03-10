// Entrada de dados
const prompt = require("prompt-sync")();
const m = Number(prompt("Digite o valor de M:"));
const n = Number(prompt("Digite o valor de N:"));

// Processamento
const lado1 = m ** 2 - n ** 2;
const lado2 = 2 * m * n;
const hipotenusa = m ** 2 + n ** 2;

// Saída da Informação
console.log(`Para M = ${m} e N = ${n} o lado um será ${lado1}, o lado dois ${lado2} e a hipotenusa ${hipotenusa}`);