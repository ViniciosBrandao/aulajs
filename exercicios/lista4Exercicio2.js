// Entrada de dados
const prompt = require("prompt-sync")();
const publico = Number(prompt("Qual o público total? "));
const popular = 10 / 100 * publico * 5;
const geral = 50 / 100 * publico * 10
const arquibancada = 30 / 100 * publico * 20;
const cadeiras = 10 / 100 * publico * 40;

// Processamento
const rendaTotal = popular + geral + arquibancada + cadeiras

// Saída da Informação
console.log(`O valor da renda total do jogo é de R$ ${rendaTotal.toFixed(2)} reais`);