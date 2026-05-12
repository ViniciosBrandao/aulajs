// Entrada de dados
const prompt = require("prompt-sync")();
const aplicacaoMensal = Number(prompt("Digite quanto deseja aplicar mensalmente: "));
const taxaInput = Number(prompt("Qual a taxa mensal? "));
const taxa = taxaInput / 100;
const meses = Number(prompt("Por quanto meses? "));

// Processamento
const valorAcumulado = ((1 + taxa) ** meses - 1) * aplicacaoMensal / taxa;


// Saída da Informação
console.log(`O valor acumulado para uma aplicação de ${aplicacaoMensal} reais mensal para ${meses} mese(s) com uma taxa de ${taxaInput}% é igual a R$ ${valorAcumulado.toFixed(2)} reais`);