// Entrada de dados
const prompt = require("prompt-sync")();
const a11 = Number(prompt("Digite o elemento a11: "));
const a12 = Number(prompt("Digite o elemento a12: "));
const a21 = Number(prompt("Digite o elemento a21: "));
const a22 = Number(prompt("Digite o elemento a22: "));

// Processamento
const determinante = a11 * a22 - a21 * a12;

// Saída da Informação
console.log(`A determinante é: ${determinante}`);