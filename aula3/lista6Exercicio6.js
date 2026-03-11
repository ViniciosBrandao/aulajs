// Entrada de dados
const prompt = require("prompt-sync")();
const tempo = Number(prompt("Quantas horas a charrete foi usada? "));

// Constantes
const taxa3H = 8.5 
const taxa = 3.5

// Processamento
const bloco3H = Math.floor(tempo / 3);
const bloco1H = tempo % 3 
const pagamento = bloco3H * taxa3H + bloco1H * taxa;

// Saída da Informação
console.log(`O valor a pagar é: ${pagamento}`);
