// Entrada de dados
const prompt = require("prompt-sync")();
const fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));

// Processamento
const celsius = (fahrenheit - 32) * 5 / 9;

// Saída da Informação
console.log(`${fahrenheit} graus Fahrenheit equivalem a ${celsius.toFixed(1)} graus Celsius`);
