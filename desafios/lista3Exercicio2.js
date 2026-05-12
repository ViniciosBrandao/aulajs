// Entrada de dados
const prompt = require("prompt-sync")();
const tvLcd = prompt("Digite quantas TV LCD vendeu: ");
const tvLed = prompt("Digite quantas TV LED vendeu: ");
const tvPlasma = prompt("Digite quantas TV PLASMA vendeu: ");
const salarioFixo = prompt("Digite o salário fixo: ");

// Processamento
const salarioTotal = (tvLcd * 50) + (tvLed * 60) + (tvPlasma * 55) + salarioFixo

// Saída da Informação
console.log(`O salário total é igual a R$ ${salarioTotal} reais`);