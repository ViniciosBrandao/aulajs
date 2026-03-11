// Entrada de Dados
const prompt = require("prompt-sync")();
const coeficienteA = prompt("Digite o coeficiente A: ");
const coeficienteB = prompt("Digite o coeficiente B: ");
const coeficienteC = prompt("Digite o coeficiente C: ");

// Processamento
const delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;

// Saída da Informação
console.log(`O valor de delta é ${delta}`);