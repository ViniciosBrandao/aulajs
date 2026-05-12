function calcularRendaTotal(publico){
    const popular = 10 / 100 * publico * 5;
    const geral = 50 / 100 * publico * 10
    const arquibancada = 30 / 100 * publico * 20;
    const cadeiras = 10 / 100 * publico * 40;
    const rendaTotal = popular + geral + arquibancada + cadeiras;
    return rendaTotal
}

// Entrada de dados
const prompt = require("prompt-sync")();
const publico = Number(prompt("Qual o público total? "));

// Processamento
const rendaTotal = calcularRendaTotal(publico);

// Saída da Informação
console.log(`O valor da renda total do jogo é de R$ ${rendaTotal.toFixed(2)} reais`);