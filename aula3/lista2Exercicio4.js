// Entrada de dados
const prompt = require("prompt-sync")();
const base = prompt("Digite a base: ");
const altura = prompt("Digite a altura: ");
 
// Processamento
const volume = base * altura * 1/3

// Saída da Informação
console.log(`O volume da pirâmide é ${volume} m3`);
